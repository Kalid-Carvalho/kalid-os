const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: { width: 830, height: 1200 }
  });
  const page = await context.newPage();

  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-uso-solo/certidao-template.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Remove decoration and auto-fit font size per page so content never overflows
  await page.evaluate(() => {
    document.querySelectorAll('.page').forEach(el => {
      el.style.boxShadow = 'none';
      el.style.margin = '0';

      const body = el.querySelector('.body');
      if (!body) return;

      let size = 13;
      const step = 0.25;
      const min = 9;

      // Reduce font until content fits inside .body (no overflow)
      while (body.scrollHeight > body.clientHeight && size > min) {
        size -= step;
        const s = size + 'px';
        body.style.fontSize = s;
        el.querySelectorAll('.section-title, .sub-title, .fim').forEach(e => {
          e.style.fontSize = s;
        });
        // Tighten line-height and spacing proportionally below 11.5px
        if (size <= 11.5) {
          body.style.lineHeight = '1.28';
          body.querySelectorAll('p').forEach(p => p.style.marginBottom = '4px');
          el.querySelectorAll('.section-title').forEach(e => e.style.marginTop = '6px');
        }
      }
      console.log('font fitted at', size.toFixed(2) + 'px');
    });
  });

  const pageEls = await page.$$('.page');
  const outDir = 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-uso-solo';

  for (let i = 0; i < pageEls.length; i++) {
    const outPath = path.join(outDir, `certidao-p${i + 1}.png`);
    await pageEls[i].screenshot({ path: outPath, type: 'png' });
    console.log(`page ${i + 1} -> ${outPath}`);
  }

  await browser.close();
  console.log('done');
})();
