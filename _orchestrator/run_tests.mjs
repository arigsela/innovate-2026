// Test one attempt's scoreboard page against the 14 checks in test-checks.md.
// Usage: node run_tests.mjs <attempt-folder> [page-file] [--prompt-only] [--suffix NAME]
// Writes test-results.md, test-results.json and screenshots/check-NN.png into the attempt folder
// (or test-results-NAME.* and screenshots-NAME/ with --suffix).
// It only reads the page. It never changes a model's files.
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');

const args = process.argv.slice(2);
const promptOnly = args.includes('--prompt-only');
const si = args.indexOf('--suffix');
const suffix = si >= 0 ? args[si + 1] : '';
const pos = args.filter((a, i) => !a.startsWith('--') && !(si >= 0 && i === si + 1));
const folder = path.resolve(pos[0]);
const pageFile = pos[1] || 'index.html';
const shotDir = path.join(folder, suffix ? `screenshots-${suffix}` : 'screenshots');
fs.mkdirSync(shotDir, { recursive: true });

const HOUSES = [
  ['Gryffindor', [0x74, 0x00, 0x01]],
  ['Hufflepuff', [0xff, 0xdb, 0x00]],
  ['Ravenclaw', [0x0e, 0x1a, 0x40]],
  ['Slytherin', [0x1a, 0x47, 0x2a]],
];

// Runs in the page. Finds one block per "+10" button and reads what each block shows.
function readPage({ colours, track }) {
  const norm = (s) => (s || '').replace(/−/g, '-').replace(/\s+/g, '');
  const visible = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const label = (b) => norm(b.innerText || b.value || '');
  const buttons = [...document.querySelectorAll('button, input[type=button], input[type=submit]')].filter(visible);
  const plus = buttons.filter((b) => label(b) === '+10');
  const countPlus = (el) => plus.filter((b) => el.contains(b)).length;
  const blocks = plus.map((b) => {
    let p = b;
    while (p.parentElement && p.parentElement !== document.documentElement && countPlus(p.parentElement) === 1) p = p.parentElement;
    return p;
  });
  const textOf = (el) => {
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const parts = [];
    while (w.nextNode()) {
      const pe = w.currentNode.parentElement;
      if (!pe || pe.closest('button, select, script, style')) continue;
      if (!visible(pe)) continue;
      parts.push(w.currentNode.textContent);
    }
    return parts.join(' ').replace(/\s+/g, ' ').trim();
  };
  const rgb = (s) => [...(s || '').matchAll(/rgba?\((\d+),\s*(\d+),\s*(\d+)/g)].map((m) => [+m[1], +m[2], +m[3]]);
  const near = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]) <= 24;
  const houses = blocks.map((bl, i) => {
    const inside = buttons.filter((b) => bl.contains(b));
    const text = textOf(bl);
    const els = [...bl.querySelectorAll('*')].filter((e) => !e.matches('button, input, select, option'));
    let colour = false;
    if (colours && colours[i]) {
      colour = els.concat([bl]).filter(visible).some((e) => {
        const cs = getComputedStyle(e);
        return rgb(cs.backgroundColor + ' ' + cs.backgroundImage).some((c) => near(c, colours[i]));
      });
    }
    // Text nodes that held a number when the page loaded. Later reads look at the same nodes,
    // so numbers inside a message that appears afterwards are not mistaken for points.
    const all = [...bl.querySelectorAll('*')];
    const paths = [];
    const w = document.createTreeWalker(bl, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const n = w.currentNode, pe = n.parentElement;
      if (!pe || pe.closest('button, select, script, style') || !visible(pe)) continue;
      if (/\d/.test(n.textContent)) paths.push([all.indexOf(pe), [...pe.childNodes].indexOf(n)]);
    }
    let nums = text.match(/-?\d+(\.\d+)?/g) || [];
    if (track && track[i]) {
      const got = track[i].map(([e, c]) => { const el = e < 0 ? bl : all[e]; const n = el && el.childNodes[c]; return n && n.nodeType === 3 ? n.textContent : null; });
      if (!got.includes(null)) nums = got.join(' ').match(/-?\d+(\.\d+)?/g) || [];
    }
    return {
      text,
      paths,
      nums,
      leader: /leader/i.test(text),
      tied: /\btied?\b/i.test(text),
      hasMinus: inside.some((b) => label(b) === '-10'),
      hasAward: inside.some((b) => /^award/i.test(label(b))),
      hasBox: !!bl.querySelector('input[type=number], input[type=text], input:not([type])'),
      widths: els.map((e) => Math.round(e.getBoundingClientRect().width)),
      colour,
    };
  });
  return {
    houses,
    body: document.body ? document.body.innerText : '',
    reset: buttons.filter((b) => /^reset/i.test(label(b))).length,
    scrollW: document.documentElement.scrollWidth,
  };
}

// Runs in the page. Clicks a button, or tags the number box of a house so it can be typed into.
function doAction({ house, what }) {
  const norm = (s) => (s || '').replace(/−/g, '-').replace(/\s+/g, '');
  const visible = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const label = (b) => norm(b.innerText || b.value || '');
  const buttons = [...document.querySelectorAll('button, input[type=button], input[type=submit]')].filter(visible);
  if (what === 'reset') {
    const r = buttons.find((b) => /^reset/i.test(label(b)));
    if (!r) return 'no Reset button';
    r.click();
    return 'ok';
  }
  const plus = buttons.filter((b) => label(b) === '+10');
  const countPlus = (el) => plus.filter((b) => el.contains(b)).length;
  let p = plus[house];
  if (!p) return 'no +10 button for house ' + (house + 1);
  while (p.parentElement && p.parentElement !== document.documentElement && countPlus(p.parentElement) === 1) p = p.parentElement;
  const inside = buttons.filter((b) => p.contains(b));
  if (what === 'tagbox') {
    document.querySelectorAll('[data-orch-box]').forEach((e) => e.removeAttribute('data-orch-box'));
    const box = p.querySelector('input[type=number], input[type=text], input:not([type])');
    if (!box) return 'no number box in house ' + (house + 1);
    box.setAttribute('data-orch-box', '1');
    return 'ok';
  }
  const want = what === 'award' ? (b) => /^award/i.test(label(b)) : (b) => label(b) === what;
  const b = inside.find(want);
  if (!b) return `no ${what} button in house ${house + 1}`;
  b.click();
  return 'ok';
}

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];

async function check(id, kind, title, width, fn) {
  const context = await browser.newContext({ viewport: { width, height: 800 } });
  const page = await context.newPage();
  const dialogs = [];
  const errors = [];
  page.on('dialog', async (d) => { dialogs.push(d.message()); await d.dismiss().catch(() => {}); });
  page.on('pageerror', (e) => errors.push(String(e.message || e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  const t = {
    page,
    track: null,
    async read(colours) {
      const r = await page.evaluate(readPage, { colours: colours || null, track: t.track });
      if (!t.track) t.track = r.houses.map((h) => h.paths);
      return r;
    },
    async click(house, what, times = 1) {
      for (let i = 0; i < times; i++) {
        const r = await page.evaluate(doAction, { house, what });
        if (r !== 'ok') throw new Error(r);
        await page.waitForTimeout(120);
      }
    },
    async award(house, value) {
      const r = await page.evaluate(doAction, { house, what: 'tagbox' });
      if (r !== 'ok') throw new Error(r);
      await page.fill('[data-orch-box]', String(value));
      await t.click(house, 'award');
    },
  };
  let verdict, why, shown = '';
  try {
    await page.goto('file://' + path.join(folder, pageFile));
    await page.waitForTimeout(400);
    const first = await t.read();
    if (first.houses.length !== 4 && id !== 1 && id !== 14) {
      verdict = 'CHECK';
      why = `Could not find four houses that each have a +10 button (found ${first.houses.length}), so this check could not be performed.`;
    } else {
      [verdict, why] = await fn(t, first);
    }
    await page.waitForTimeout(300);
    const end = await t.read();
    shown = end.body;
  } catch (e) {
    verdict = 'FAIL';
    why = 'Could not perform the check: ' + e.message;
    shown = await page.evaluate(() => (document.body ? document.body.innerText : '')).catch(() => '');
  }
  if (verdict === 'PASS' && dialogs.length) { verdict = 'CHECK'; why += ' But a pop-up alert appeared.'; }
  const shot = `check-${String(id).padStart(2, '0')}.png`;
  await page.screenshot({ path: path.join(shotDir, shot) }).catch(() => {});
  results.push({ id, kind, title, verdict, why, shown, dialogs, errors: [...new Set(errors)], screenshot: path.basename(shotDir) + '/' + shot });
  await context.close();
}

const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const othersSame = (now, first, except) => now.houses.every((h, i) => except.includes(i) || same(h.nums, first.houses[i].nums));
const newLines = (before, after) => {
  const old = new Set(before.split('\n').map((s) => s.trim()));
  return after.split('\n').map((s) => s.trim()).filter((s) => s && !old.has(s) && /[a-z]{3}/i.test(s));
};

await check(1, 'prompt', 'Load the page', 1280, async (t, first) => {
  const miss = [];
  if (first.houses.length !== 4) miss.push(`${first.houses.length} houses with a +10 button, not 4`);
  first.houses.forEach((h, i) => {
    if (!h.hasMinus) miss.push(`house ${i + 1} has no -10 button`);
    if (!h.hasAward) miss.push(`house ${i + 1} has no Award button`);
    if (!h.hasBox) miss.push(`house ${i + 1} has no number box`);
  });
  if (!first.reset) miss.push('no Reset button');
  return miss.length ? ['FAIL', miss.join('; ') + '.'] : ['PASS', 'Four houses, each with +10, -10, a number box and Award. A Reset button exists.'];
});

await check(2, 'prompt', 'Click +10 twice on house 1', 1280, async (t, first) => {
  await t.click(0, '+10', 2);
  const now = await t.read();
  if (!now.houses[0] || !now.houses[0].nums.includes('20')) return ['FAIL', `House 1 does not show 20. It shows: "${now.houses[0] ? now.houses[0].text : ''}".`];
  if (!othersSame(now, first, [0])) return ['FAIL', 'House 1 shows 20, but another house changed too.'];
  return ['PASS', 'House 1 shows 20. The other houses did not change.'];
});

await check(3, 'prompt', 'Click -10 on house 2 while it has 0', 1280, async (t, first) => {
  await t.click(1, '-10');
  const now = await t.read();
  if (now.houses[1].nums.some((n) => n.startsWith('-'))) return ['FAIL', `House 2 shows a negative number: "${now.houses[1].text}".`];
  if (!same(now.houses[1].nums, first.houses[1].nums)) return ['FAIL', `House 2 changed: "${now.houses[1].text}".`];
  return ['PASS', 'House 2 stays at 0.'];
});

await check(4, 'prompt', 'Type 25 in house 3 and click Award', 1280, async (t, first) => {
  await t.award(2, 25);
  const now = await t.read();
  if (!now.houses[2].nums.includes('25')) return ['FAIL', `House 3 does not show 25. It shows: "${now.houses[2].text}".`];
  if (!othersSame(now, first, [2])) return ['FAIL', 'House 3 shows 25, but another house changed too.'];
  return ['PASS', 'House 3 shows 25.'];
});

await check(5, 'prompt', 'Type -5 in house 1 and click Award', 1280, async (t, first) => {
  await t.award(0, -5);
  const now = await t.read();
  if (!same(now.houses.map((h) => h.nums), first.houses.map((h) => h.nums))) return ['FAIL', `The points changed. House 1 shows: "${now.houses[0].text}".`];
  const added = newLines(first.body, now.body);
  if (added.length) return ['PASS', `Points unchanged. Message on the page: "${added.join(' / ')}".`];
  return ['FAIL', 'Points unchanged, but no message appeared on the page.'];
});

await check(6, 'prompt', 'Click +10 twice on house 1 and once on house 2', 1280, async (t) => {
  await t.click(0, '+10', 2);
  await t.click(1, '+10', 1);
  const now = await t.read();
  const who = now.houses.map((h, i) => (h.leader ? i + 1 : 0)).filter(Boolean);
  if (same(who, [1])) return ['PASS', 'Only house 1 shows the word Leader.'];
  return ['FAIL', who.length ? `The word Leader shows on house ${who.join(' and ')}, not on house 1 only.` : 'No house shows the word Leader.'];
});

await check(7, 'prompt', 'Give points to houses 1 and 2, then click Reset', 1280, async (t, first) => {
  await t.click(0, '+10', 2);
  await t.click(1, '+10', 1);
  const mid = await t.read();
  if (same(mid.houses.map((h) => h.nums), first.houses.map((h) => h.nums))) return ['FAIL', 'The +10 buttons did not change any points, so Reset could not be tested.'];
  await t.click(0, 'reset');
  const now = await t.read();
  if (same(now.houses.map((h) => h.nums), first.houses.map((h) => h.nums))) return ['PASS', 'Every house is back to 0.'];
  return ['FAIL', `Not every house went back to 0: ${now.houses.map((h) => '"' + h.text + '"').join(', ')}.`];
});

await check(8, 'prompt', 'Give house 2 50 points, then take house 1 from 10 to 40', 1280, async (t) => {
  await t.click(1, '+10', 5);
  await t.click(0, '+10', 1);
  const a = await t.read();
  await t.click(0, '+10', 3);
  const b = await t.read();
  const wa = a.houses[0].widths, wb = b.houses[0].widths;
  if (wa.length !== wb.length) return ['CHECK', 'The page rebuilt house 1 with different elements, so the bar could not be measured. Look at the screenshot.'];
  const grew = wb.some((w, i) => w - wa[i] >= 3);
  return grew ? ['PASS', 'Something in house 1 got wider between 10 and 40 points.'] : ['FAIL', 'Nothing in house 1 got wider between 10 and 40 points. No bar grows.'];
});

if (!promptOnly) {
  await check(9, 'school', 'Load the page and read the house names', 1280, async (t, first) => {
    const wrong = HOUSES.map(([n], i) => (new RegExp(n, 'i').test(first.houses[i].text) ? '' : `house ${i + 1} is not ${n}`)).filter(Boolean);
    return wrong.length ? ['FAIL', `${wrong.join('; ')}. The houses are: ${first.houses.map((h) => '"' + h.text.slice(0, 30) + '"').join(', ')}.`] : ['PASS', 'Gryffindor, Hufflepuff, Ravenclaw, Slytherin, in that order.'];
  });

  await check(10, 'school', 'Give every house 10 points and look at the colours', 1280, async (t) => {
    for (let i = 0; i < 4; i++) await t.click(i, '+10');
    const now = await t.read(HOUSES.map((h) => h[1]));
    const wrong = HOUSES.map(([n], i) => (now.houses[i].colour ? '' : n)).filter(Boolean);
    return wrong.length ? ['FAIL', `No element filled with the house's main colour for: ${wrong.join(', ')}.`] : ['PASS', 'Every house has an element filled with its main colour.'];
  });

  await check(11, 'school', 'Type 60 in house 1 and click Award', 1280, async (t, first) => {
    await t.award(0, 60);
    const now = await t.read();
    if (!same(now.houses.map((h) => h.nums), first.houses.map((h) => h.nums))) return ['FAIL', `The award was accepted. House 1 shows: "${now.houses[0].text}".`];
    const added = newLines(first.body, now.body);
    return added.length ? ['PASS', `Points unchanged. Message on the page: "${added.join(' / ')}".`] : ['FAIL', 'Points unchanged, but no message appeared on the page.'];
  });

  await check(12, 'school', 'Click +10 once on house 1 and once on house 2', 1280, async (t) => {
    await t.click(0, '+10');
    await t.click(1, '+10');
    const now = await t.read();
    const leaders = now.houses.map((h, i) => (h.leader ? i + 1 : 0)).filter(Boolean);
    const tied = now.houses.map((h, i) => (h.tied ? i + 1 : 0)).filter(Boolean);
    if (leaders.length) return ['FAIL', `The word Leader shows on house ${leaders.join(' and ')} although houses 1 and 2 are level.`];
    if (!same(tied, [1, 2])) return ['FAIL', tied.length ? `The word Tied shows on house ${tied.join(' and ')}, not on houses 1 and 2 only.` : 'No Leader, but houses 1 and 2 do not show the word Tied.'];
    return ['PASS', 'No Leader. Houses 1 and 2 show Tied.'];
  });

  await check(13, 'school', 'Click +10 twice on house 1, then reload the page', 1280, async (t) => {
    await t.click(0, '+10', 2);
    await t.page.reload();
    await t.page.waitForTimeout(400);
    const now = await t.read();
    if (now.houses[0] && now.houses[0].nums.includes('20')) return ['PASS', 'House 1 still shows 20 after the reload.'];
    return ['FAIL', `The points were lost. House 1 shows: "${now.houses[0] ? now.houses[0].text : ''}".`];
  });

  await check(14, 'school', 'Load the page at 360px wide', 360, async (t, first) => (first.scrollW > 360 ? ['FAIL', `The page is ${first.scrollW}px wide, so it scrolls sideways.`] : ['PASS', 'No sideways scrolling.']));
}
await browser.close();

const count = (kind) => results.filter((r) => r.kind === kind && r.verdict === 'PASS').length;
const total = (kind) => results.filter((r) => r.kind === kind).length;
let md = `# Test results\n\nPage: \`${pageFile}\`\n\n- Prompt checks passed: ${count('prompt')} of ${total('prompt')}\n`;
if (!promptOnly) md += `- School checks passed: ${count('school')} of ${total('school')}\n`;
md += '\n| # | Check | Verdict | What happened |\n| --- | --- | --- | --- |\n';
for (const r of results) md += `| ${r.id} | ${r.title} | ${r.verdict} | ${r.why.replace(/\|/g, '\\|')} |\n`;
for (const r of results) {
  md += `\n## Check ${r.id}: ${r.title}\n\nVerdict: ${r.verdict}. ${r.why}\n\nScreenshot: \`${r.screenshot}\`\n\nVisible text at the end:\n\n\`\`\`\n${r.shown.trim()}\n\`\`\`\n`;
  if (r.dialogs.length) md += `\nPop-up alerts: ${r.dialogs.map((d) => '"' + d + '"').join(', ')}\n`;
  if (r.errors.length) md += `\nScript errors: ${r.errors.map((d) => '"' + d + '"').join(', ')}\n`;
}
for (const f of ['test_scoreboard.js']) {
  if (!suffix && fs.existsSync(path.join(folder, f))) {
    let out;
    try { out = execSync(`node ${f}`, { cwd: folder, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); } catch (e) { out = (e.stdout || '') + (e.stderr || '') + `\n(exit code ${e.status})`; }
    md += `\n## The attempt's own tests: \`node ${f}\`\n\n\`\`\`\n${out.trim()}\n\`\`\`\n`;
  }
}
const base = suffix ? `test-results-${suffix}` : 'test-results';
fs.writeFileSync(path.join(folder, base + '.md'), md);
fs.writeFileSync(path.join(folder, base + '.json'), JSON.stringify({ page: pageFile, prompt: [count('prompt'), total('prompt')], school: promptOnly ? null : [count('school'), total('school')], results }, null, 2));
console.log(`${path.basename(path.dirname(folder))}/${path.basename(folder)} ${pageFile}: prompt ${count('prompt')}/${total('prompt')}` + (promptOnly ? '' : `, school ${count('school')}/${total('school')}`) + ' | ' + results.map((r) => r.id + ':' + r.verdict[0]).join(' '));
