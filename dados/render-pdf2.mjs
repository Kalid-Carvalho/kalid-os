import { pdfToPng } from 'pdf-to-png-converter';

const pages = await pdfToPng('C:/Users/kalid/Downloads/KalidCarvalho-os/dados/CIT_PETROMOTOR_MODELO.pdf', {
  disableFontFace: false,
  useSystemFonts: true,
  viewportScale: 2.5,
  pagesToProcess: [1, 2],
  outputFolder: 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados',
  outputFileMask: 'pdf-page',
  verbosityLevel: 0,
  pdfFileInitParams: {
    cMapUrl: 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/node_modules/pdfjs-dist/cmaps/',
    // Note: forward slashes required
    cMapPacked: true,
  },
});

console.log('Rendered:', pages.map(p => p.name));
