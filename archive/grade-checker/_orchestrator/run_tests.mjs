// Drives one attempt's page in headless Chrome and judges the checks in test-checks.md.
// Usage: node run_tests.mjs <attempt-folder> [page-file] [--prompt-only] [--suffix NAME]
//   page-file     default index.html
//   --prompt-only run checks 1-7 only (used for run 2 intermediate versions)
//   --suffix NAME write test-results-NAME.md and screenshots-NAME/ instead of the defaults
// Verdicts are a first pass. The orchestrator reads every result and screenshot before reporting.

import { createRequire } from 'node:module';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');

const args = process.argv.slice(2);
const promptOnly = args.includes('--prompt-only');
const suffixAt = args.indexOf('--suffix');
const suffix = suffixAt >= 0 ? args[suffixAt + 1] : '';
const positional = args.filter((a, i) => !a.startsWith('--') && (suffixAt < 0 || i !== suffixAt + 1));
const attemptDir = resolve(positional[0]);
const pageFile = positional[1] || 'index.html';
const pagePath = join(attemptDir, pageFile);
const shotsName = suffix ? `screenshots-${suffix}` : 'screenshots';
const shotsDir = join(attemptDir, shotsName);
const outFile = join(attemptDir, suffix ? `test-results-${suffix}.md` : 'test-results.md');
const jsonFile = join(attemptDir, suffix ? `test-results-${suffix}.json` : 'test-results.json');

const CHECKS = [
  { n: 1, group: 'prompt', input: '85, 90, 78', expect: 'Average 84.3, grade B' },
  { n: 2, group: 'prompt', input: '', expect: 'Friendly message on the page, no grade' },
  { n: 3, group: 'prompt', input: 'abc', expect: 'Friendly message on the page, no grade' },
  { n: 4, group: 'prompt', input: '105', expect: 'Rejected (scores must be 0-100), no grade' },
  { n: 5, group: 'prompt', input: '-5', expect: 'Rejected (scores must be 0-100), no grade' },
  { n: 6, group: 'prompt', input: '80', expect: 'Grade B' },
  { n: 7, group: 'prompt', input: '100', expect: 'Grade A' },
  { n: 8, group: 'project', input: '85, 90, 78, 40', expect: 'Page says 40 was dropped. Average 84.3, grade B' },
  { n: 9, group: 'project', input: '89.5', expect: 'Average 89.5, grade A' },
  { n: 10, group: 'project', input: '65, 68', expect: 'Average 66.5, grade D, and the line "Retake needed"' },
  { n: 11, group: 'project', input: '85, 90, 78', enter: true, expect: 'Average 84.3, grade B (Enter pressed, no click)' },
  { n: 12, group: 'project', width: 360, expect: 'No sideways scrolling at 360px wide' },
];

const TEXT_BOX = 'input:not([type]), input[type=text], input[type=number], input[type=search], textarea';
const BUTTON = 'button, input[type=button], input[type=submit]';

// Returns the letter grade the text shows, or null if none can be found.
function shownGrade(text) {
  const labelled = text.match(/grade\s*(?:is|was|of)?\s*[:=\-–]?\s*([A-F])(?![A-Za-z])/i);
  if (labelled) return labelled[1].toUpperCase();
  const alone = text.match(/^\s*([A-F])[+-]?\s*$/m);
  return alone ? alone[1].toUpperCase() : null;
}

// Returns the lines of `after` that were not in `before`.
function newLines(before, after) {
  const seen = new Set(before.split('\n').map((l) => l.trim()));
  return after.split('\n').map((l) => l.trim()).filter((l) => l && !seen.has(l)).join('\n');
}

function judge(check, r) {
  if (r.driveProblem) return ['CHECK', r.driveProblem];
  const text = r.newText || '';
  const grade = shownGrade(text);
  const hasErrors = r.errors.length > 0;
  const n = check.n;

  if (n === 12) {
    return r.scrollWidth <= 360
      ? ['PASS', `scrollWidth ${r.scrollWidth}`]
      : ['FAIL', `scrollWidth ${r.scrollWidth} is wider than 360`];
  }
  if (n === 1 || n === 11) {
    if (text.includes('84.3') && grade === 'B') return ['PASS', 'shows 84.3 and grade B'];
    if (!text) return ['FAIL', hasErrors ? 'script error, nothing shown' : 'nothing new shown on the page'];
    return ['FAIL', `expected 84.3 and B; grade found: ${grade}`];
  }
  if (n >= 2 && n <= 5) {
    if (/NaN|undefined|Infinity/.test(text)) return ['FAIL', 'shows NaN, undefined or Infinity'];
    if (grade) return ['FAIL', `shows grade ${grade} for invalid input`];
    if (!text && r.dialogs.length) return ['CHECK', 'message was a pop-up alert, not on the page'];
    if (!text) return ['FAIL', hasErrors ? 'script error, no message' : 'no message shown'];
    if (/average\W{0,4}-?\d/i.test(text)) return ['CHECK', 'shows an average for invalid input'];
    return ['PASS', 'message shown, no grade'];
  }
  if (n === 6 || n === 7) {
    const want = n === 6 ? 'B' : 'A';
    if (grade === want) return ['PASS', `shows grade ${want}`];
    if (grade) return ['FAIL', `shows grade ${grade}, expected ${want}`];
    if (!text) return ['FAIL', 'nothing new shown on the page'];
    return ['CHECK', 'could not find a grade in the new text'];
  }
  if (n === 8) {
    const dropped = /drop/i.test(text) && /\b40\b/.test(text);
    if (text.includes('84.3') && grade === 'B' && dropped) return ['PASS', 'dropped 40, shows 84.3 and B'];
    return ['FAIL', `expected "dropped 40", 84.3 and B; grade found: ${grade}; drop text: ${dropped}`];
  }
  if (n === 9) {
    if (text.includes('89.5') && grade === 'A') return ['PASS', 'shows 89.5 and grade A'];
    return ['FAIL', `expected 89.5 and A; grade found: ${grade}`];
  }
  if (n === 10) {
    const retake = /retake needed/i.test(text);
    if (text.includes('66.5') && grade === 'D' && retake) return ['PASS', 'shows 66.5, D and "Retake needed"'];
    return ['FAIL', `expected 66.5, D and "Retake needed"; grade found: ${grade}; retake line: ${retake}`];
  }
  return ['CHECK', 'no rule for this check'];
}

async function visibleText(page) {
  return page.evaluate(() => {
    const body = document.body ? document.body.innerText : '';
    const fields = [...document.querySelectorAll('input[readonly], input[disabled], output')]
      .map((e) => e.value).filter(Boolean);
    return [body, ...fields].join('\n');
  });
}

async function firstVisible(page, selector, prefer) {
  const all = await page.locator(selector).all();
  const visible = [];
  for (const el of all) if (await el.isVisible()) visible.push(el);
  if (prefer) {
    for (const el of visible) {
      const label = ((await el.innerText().catch(() => '')) + ' ' + ((await el.getAttribute('value')) || '')).toLowerCase();
      if (label.includes(prefer)) return { el, count: visible.length };
    }
  }
  return { el: visible[0] || null, count: visible.length };
}

async function runCheck(browser, check) {
  const r = { dialogs: [], errors: [], newText: '', fullText: '', scrollWidth: null, driveProblem: '', shot: '' };
  const context = await browser.newContext({ viewport: { width: check.width || 1280, height: 800 } });
  const page = await context.newPage();
  page.on('dialog', async (d) => { r.dialogs.push(d.message()); await d.accept().catch(() => {}); });
  page.on('pageerror', (e) => r.errors.push(`page error: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') r.errors.push(`console error: ${m.text()}`); });
  try {
    await page.goto(pathToFileURL(pagePath).href, { waitUntil: 'load', timeout: 10000 });
    await page.waitForTimeout(300);
    const before = await visibleText(page);

    if (check.n === 12) {
      r.scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      r.fullText = before;
    } else {
      const box = await firstVisible(page, TEXT_BOX);
      const button = await firstVisible(page, BUTTON, 'calc');
      if (!box.el) r.driveProblem = 'no visible text box found';
      else if (!button.el && !check.enter) r.driveProblem = 'no visible button found';
      else {
        try {
          await box.el.fill(check.input, { timeout: 3000 });
          if (check.enter) await box.el.press('Enter');
          else await button.el.click({ timeout: 3000 });
        } catch (e) {
          r.driveProblem = `could not type or click: ${e.message.split('\n')[0]}`;
        }
        let after = before;
        for (let i = 0; i < 8; i++) {
          await page.waitForTimeout(250);
          after = await visibleText(page).catch(() => after);
          if (after !== before && i >= 1) break;
        }
        r.fullText = after;
        r.newText = newLines(before, after);
        if (!r.driveProblem && box.count > 1) {
          r.driveProblem = `${box.count} text boxes on the page; typed into the first one`;
        }
      }
    }
    r.shot = `${shotsName}/check-${String(check.n).padStart(2, '0')}.png`;
    await page.screenshot({ path: join(attemptDir, r.shot), fullPage: true });
  } catch (e) {
    r.errors.push(`could not run check: ${e.message.split('\n')[0]}`);
    r.loadFailed = true;
  }
  await context.close();
  return r;
}

function block(label, text) {
  return `${label}:\n\n\`\`\`\n${(text || '(nothing)').slice(0, 1500)}\n\`\`\`\n`;
}

const checks = promptOnly ? CHECKS.filter((c) => c.group === 'prompt') : CHECKS;
const results = [];
let md = `# Test results: ${pageFile}\n\nAttempt folder: \`${attemptDir}\`\n\n`;

if (!existsSync(pagePath)) {
  for (const c of checks) results.push({ n: c.n, group: c.group, verdict: 'FAIL', reason: `${pageFile} does not exist` });
} else {
  mkdirSync(shotsDir, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  for (const c of checks) {
    const r = await runCheck(browser, c);
    const [verdict, reason] = r.loadFailed ? ['FAIL', r.errors.join('; ')] : judge(c, r);
    results.push({ n: c.n, group: c.group, verdict, reason, ...r, check: c });
  }
  await browser.close();
}

const count = (group, verdict) => results.filter((r) => r.group === group && r.verdict === verdict).length;
md += `| Group | PASS | FAIL | CHECK |\n| --- | --- | --- | --- |\n`;
md += `| Prompt checks (1-7) | ${count('prompt', 'PASS')} | ${count('prompt', 'FAIL')} | ${count('prompt', 'CHECK')} |\n`;
if (!promptOnly) md += `| Project checks (8-12) | ${count('project', 'PASS')} | ${count('project', 'FAIL')} | ${count('project', 'CHECK')} |\n`;
md += '\n';

for (const r of results) {
  const c = r.check || CHECKS.find((x) => x.n === r.n);
  const action = c.n === 12 ? 'Load the page at 360px wide'
    : `Type \`${c.input || '(nothing)'}\`, ${c.enter ? 'press Enter' : 'click the button'}`;
  md += `## Check ${c.n}: ${r.verdict}\n\n- Action: ${action}\n- Correct behavior: ${c.expect}\n- Why: ${r.reason}\n`;
  if (r.shot) md += `- Screenshot: \`${r.shot}\`\n`;
  md += '\n';
  if (r.check) {
    md += block('New text on the page after the action', r.newText);
    md += block('All visible text', r.fullText);
    if (r.dialogs.length) md += block('Pop-up alerts', r.dialogs.join('\n'));
    if (r.errors.length) md += block('Errors', r.errors.join('\n'));
  }
  md += '\n';
}

// Run the attempt's own tests if it has them (full runs only).
if (!promptOnly && existsSync(join(attemptDir, 'test_grader.js'))) {
  let out;
  try {
    out = execFileSync('node', ['test_grader.js'], { cwd: attemptDir, timeout: 30000, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    out = `exit 0\n${out}`;
  } catch (e) {
    out = `exit ${e.status}\n${e.stdout || ''}\n${e.stderr || ''}`;
  }
  md += `## The attempt's own tests: \`node test_grader.js\`\n\n\`\`\`\n${out.slice(0, 6000)}\n\`\`\`\n`;
}

writeFileSync(outFile, md);
writeFileSync(jsonFile, JSON.stringify(results.map(({ n, group, verdict, reason }) => ({ n, group, verdict, reason })), null, 2));
console.log(results.map((r) => `${r.n}:${r.verdict}`).join(' '));
