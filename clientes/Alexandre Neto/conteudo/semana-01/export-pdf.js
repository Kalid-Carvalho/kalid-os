const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 794, height: 1123 });

  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/clientes/Alexandre%20Neto/conteudo/semana-01/semana-01-pdf.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  await page.pdf({
    path: 'C:/Users/kalid/Downloads/KalidCarvalho-os/clientes/Alexandre Neto/conteudo/semana-01/semana-01.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  console.log('done');
  await browser.close();
})();
