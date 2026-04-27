const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const pdfjsPath = 'C:/Users/kalid/Downloads/KalidCarvalho-os/node_modules/pdfjs-dist/build/pdf.mjs';
  const workerPath = 'C:/Users/kalid/Downloads/KalidCarvalho-os/node_modules/pdfjs-dist/build/pdf.worker.mjs';
  const pdfBase64 = fs.readFileSync('C:/Users/kalid/Downloads/KalidCarvalho-os/dados/CIT_PETROMOTOR_MODELO.pdf').toString('base64');

  await page.setViewportSize({ width: 1800, height: 2600 });

  await page.setContent(`<!DOCTYPE html>
<html><head><style>body{margin:0;background:#fff;display:flex;flex-direction:column;gap:20px}</style></head>
<body>
<canvas id='c1'></canvas>
<canvas id='c2'></canvas>
<script type='module'>
import * as pdfjsLib from 'file:///${pdfjsPath}';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'file:///${workerPath}';
const base64 = '${pdfBase64}';
const binary = atob(base64);
const data = new Uint8Array(binary.length);
for(let i=0;i<binary.length;i++) data[i]=binary.charCodeAt(i);
const doc = await pdfjsLib.getDocument({data}).promise;

async function renderPage(pageNum, canvasId) {
  const p = await doc.getPage(pageNum);
  const vp = p.getViewport({scale:2.5});
  const c = document.getElementById(canvasId);
  c.width=vp.width; c.height=vp.height;
  await p.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
}

await renderPage(1, 'c1');
await renderPage(2, 'c2');
document.title='ready';
</script>
</body></html>`);

  await page.waitForFunction(() => document.title === 'ready', { timeout: 60000 });

  // Screenshot página 1
  const c1 = await page.$('#c1');
  await c1.screenshot({ path: 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados/pdf-page-1.png' });

  // Screenshot página 2
  const c2 = await page.$('#c2');
  await c2.screenshot({ path: 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados/pdf-page-2.png' });

  console.log('done');
  await browser.close();
})();
