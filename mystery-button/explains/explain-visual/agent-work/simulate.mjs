// Runs the <script> from index.html against a fake page, so the click logic
// can be checked without a browser. Reads index.html; never writes to it.
import fs from 'node:fs';

const html = fs.readFileSync(process.argv[2], 'utf8');
const js = html.match(/<script>([\s\S]*?)<\/script>/)[1];

function run(search, saved, gaps) {
  const store = new Map(saved == null ? [] : [['mb.n', String(saved)]]);
  const els = { b: {}, m: { textContent: '' }, r: { hidden: true, textContent: '' } };
  const document = { title: 'Click me', body: { style: {} }, getElementById: (i) => els[i] };
  const localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
  };
  let now = 1000000;
  const DateStub = { now: () => now };
  new Function('document', 'localStorage', 'location', 'Date', js)(document, localStorage, { search }, DateStub);
  const snap = (label) =>
    console.log(
      label,
      JSON.stringify({
        bg: document.body.style.background,
        title: document.title,
        msg: els.m.textContent,
        stored: store.get('mb.n'),
        storedType: typeof store.get('mb.n'),
        panelHidden: els.r.hidden,
        panel: els.r.textContent,
      })
    );
  snap('  load ');
  gaps.forEach((gap, i) => {
    now += gap;
    els.b.onclick();
    snap('  click' + (i + 1) + ' (+' + gap + 'ms)');
  });
}

console.log('A: fresh, no reveal, one click');
run('', null, [5000]);
console.log('B: fresh, ?reveal, one click');
run('?reveal', null, [5000]);
console.log('C: saved 6, one click -> 7');
run('?reveal', 6, [5000]);
console.log('D: secret rhythm 3 fast, pause, 2 fast, then one more');
run('?reveal', null, [5000, 200, 200, 1500, 200, 3000]);
console.log('E1: boundary 399 / 1000 / 399 (should unlock)');
run('?reveal', null, [5000, 399, 399, 1000, 399]);
console.log('E2: pause of 999 (should not unlock)');
run('?reveal', null, [5000, 399, 399, 999, 399]);
console.log('E3: last gap 400 (should not unlock)');
run('?reveal', null, [5000, 399, 399, 1000, 400]);
console.log('F: saved 49 -> 50 hue wrap');
run('?reveal', 49, [10]);
