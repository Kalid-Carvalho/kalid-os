const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1000, height: 1400 });
  // Usar goto com file:// para carregar imagens locais
  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const el = await page.$('.page');
  await el.screenshot({ path: 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados/html-preview.png' });
  console.log('done');
  await browser.close();
})();
