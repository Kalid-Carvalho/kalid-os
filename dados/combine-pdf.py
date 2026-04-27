from PIL import Image
import os

base = 'c:/Users/kalid/Downloads/KalidCarvalho-os/dados'
imgs = []

for i in range(1, 10):
    p = os.path.join(base, f'certidao-p{i}.png')
    if not os.path.exists(p):
        break
    img = Image.open(p).convert('RGB')
    # Set DPI so the image prints at A4 size (210x297mm at 192dpi = 2x scale)
    img.info['dpi'] = (192, 192)
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
