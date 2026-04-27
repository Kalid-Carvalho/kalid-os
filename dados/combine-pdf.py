from PIL import Image
import os

base = 'c:/Users/kalid/Downloads/KalidCarvalho-os/dados'

# A4 at 2x deviceScaleFactor (96dpi * 2 = 192dpi)
A4_W = 1588  # 794 * 2
A4_H = 2246  # 1123 * 2

imgs = []

for i in range(1, 10):
    p = os.path.join(base, f'certidao-p{i}.png')
    if not os.path.exists(p):
        break
    img = Image.open(p).convert('RGB')
    # Force exact A4 size so all pages have the same scale in the PDF
    if img.size != (A4_W, A4_H):
        canvas = Image.new('RGB', (A4_W, A4_H), (255, 255, 255))
        # Paste screenshot at top; if taller than A4 it gets cropped at bottom
        # (footer is absolute-positioned so it stays at the bottom of the element)
        paste_h = min(img.size[1], A4_H)
        canvas.paste(img.crop((0, 0, A4_W, paste_h)), (0, 0))
        img = canvas
    imgs.append(img)

if not imgs:
    print('Nenhuma imagem encontrada.')
    exit(1)

out = os.path.join(base, 'certidao-output.pdf')
imgs[0].save(
    out,
    save_all=True,
    append_images=imgs[1:],
    resolution=192,
    format='PDF'
)
print(f'Saved: {out}  ({len(imgs)} pages)')
