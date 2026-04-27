const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 900, height: 1400 });
  const html = fs.readFileSync('C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html', 'utf8');
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const el = await page.$('.page');
  await el.screenshot({ path: 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados/html-preview.png' });
  console.log('done');
  await browser.close();
})();
