// Dev-only: drive the page to a set of scroll positions and capture each,
// so the scrubbed timelines can be eyeballed without a browser in the loop.
import { chromium } from 'playwright';
import fs from 'node:fs';

const OUT = process.argv[2] || '/tmp/shots';
const STOPS = (process.argv[3] || '0,0.06,0.12,0.2,0.28,0.38,0.46,0.55,0.64,0.72,0.8,0.88,0.95,1')
  .split(',').map(Number);

fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  // Pinned to the pre-installed browser: the npm playwright version here does
  // not match the bundled revision, and downloading is blocked.
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--disable-lcd-text'],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

await page.goto('http://localhost:8099/index.html', { waitUntil: 'load' });
await page.waitForTimeout(1500);

const max = await page.evaluate(() => document.body.scrollHeight - window.innerHeight);
console.log('scrollable height:', max);

for (const s of STOPS) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(max * s));
  await page.waitForTimeout(900);
  const name = `${OUT}/s${String(Math.round(s * 100)).padStart(3, '0')}.png`;
  await page.screenshot({ path: name });
}

console.log(errors.length ? 'CONSOLE ERRORS:\n' + errors.join('\n') : 'no console errors');
await browser.close();
