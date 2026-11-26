// Check a mystery-button page: the count survives a reload, the secret pattern works, the title changes on click 7.
// Usage: node check_mystery.mjs <folder-with-index.html> ...
import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const folder of process.argv.slice(2)) {
  const url = 'file://' + path.resolve(folder, 'index.html') + '?reveal';
  const out = [];
  const fresh = async () => { const c = await browser.newContext(); const p = await c.newPage(); await p.goto(url); return [c, p]; };
  const panel = async (p) => (await p.locator('#r').innerText()).replace(/\n/g, ' | ');
  let [c, p] = await fresh();
  for (let i = 0; i < 5; i++) { await p.click('#b'); await p.waitForTimeout(500); }
  await p.reload();
  out.push('count after 5 clicks and a reload: ' + ((await panel(p)).match(/clicks saved: (\d+)/) || [])[1]);
  await c.close();
  [c, p] = await fresh();
  for (let i = 0; i < 3; i++) { await p.click('#b'); await p.waitForTimeout(100); }
  await p.waitForTimeout(1500);
  for (let i = 0; i < 2; i++) { await p.click('#b'); await p.waitForTimeout(100); }
  out.push('message after 3 fast, pause, 2 fast: "' + (await p.locator('#m').innerText()) + '"');
  await c.close();
  [c, p] = await fresh();
  const titles = [];
  for (let i = 1; i <= 8; i++) { await p.click('#b'); await p.waitForTimeout(500); titles.push(i + '=' + (await p.title())); }
  out.push('titles: ' + titles.slice(5).join(', '));
  out.push('hue after 8 clicks: ' + ((await panel(p)).match(/hue: (\d+)/) || [])[1]);
  await c.close();
  console.log(folder + '\n  ' + out.join('\n  '));
}
await browser.close();
