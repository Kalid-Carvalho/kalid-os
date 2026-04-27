const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: { width: 830, height: 1200 }
  });
  const page = await context.newPage();

  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Force each page to exactly A4 height and remove decorations
  await page.evaluate(() => {
    document.querySelectorAll('.page').forEach(el => {
      el.style.boxShadow = 'none';
      el.style.margin = '0';
      el.style.minHeight = '297mm';
      el.style.height = '297mm';
      el.style.overflow = 'hidden';
    });
  });

  const pageEls = await page.$$('.page');
  const outDir = 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados';

  for (let i = 0; i < pageEls.length; i++) {
    const outPath = path.join(outDir, `certidao-p${i + 1}.png`);
    await pageEls[i].screenshot({ path: outPath, type: 'png' });
    console.log(`page ${i + 1} -> ${outPath}`);
  }

  await browser.close();
  console.log('done');
})();
