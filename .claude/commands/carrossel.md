---
name: carrossel
description: >
  Cria carrosséis completos para Instagram e TikTok com a identidade visual do usuário.
  Gera o texto dos slides, cria os HTMLs estilizados com a marca do usuário, renderiza
  em PNG via Playwright e pergunta se quer versão TikTok.
  Use quando o usuário mencionar "carrossel", "carousel", "slides instagram",
  "slides tiktok", "faz um carrossel", ou pedir pra transformar um tema em carrossel.
---

# /carrossel — Criação de Carrossel

## Dependências

- **Identidade visual:** `marca/design-guide.md` — LER ANTES de criar qualquer HTML
- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`
- **Fontes de referência por canal:** `_contexto/fontes-referencia.md` — LER na Fase 0 para calibrar o ângulo e as referências do conteúdo
- **Playwright CLI:** `npx playwright screenshot` para renderizar HTMLs em PNG. Se nunca usou, rodar uma vez: `npx playwright install chromium`

## Input

O usuário fornece:
- Tema, ideia, texto livre, link ou arquivo de referência
- Número do episódio ou série (se aplicável)
- Foto pra capa (opcional — se não fornecer, cria capa sem foto)

Se o usuário não informar a marca/canal, perguntar antes de continuar:

> "Esse carrossel é pra qual canal? @eukalidcarvalho (marketing jurídico), @kalidcarvalho (IA e tech) ou GROVW (performance digital)?"

---

## Design system por canal

| Canal | Fundo | Destaque | Fontes | Tom do conteúdo |
|---|---|---|---|---|
| @eukalidcarvalho | #0D1526 | #1A56DB | Space Grotesk | Marketing jurídico, dores do advogado, captação de clientes |
| @kalidcarvalho | #0D1526 | #1A56DB | Space Grotesk | IA, apps, Claude, criação digital, builder mindset |
| GROVW | #000000 | #cdff00 | Inter + JetBrains Mono | Performance digital, tráfego pago, conversão, PMEs |

Aplicar o design system correto na Fase 2 (Visual). Se o `marca/design-guide.md` tiver as definições de cada marca, usar como referência principal.

---

## Workflow em 4 Fases

### Fase 0 — Pesquisa (quando o input for um tema, não texto pronto)

1. Perguntar: "Quer que eu pesquise dados atuais sobre esse tema antes de escrever?"
2. Se sim, usar WebSearch com buscas como:
   - `"[tema]" dados estatísticas 2025`
   - `"[tema]" Brasil advogados (ou setor relevante)`
   - `"[tema]" estudo pesquisa site:jusbrasil.com.br OR site:conjur.com.br OR site:g1.globo.com`
3. Extrair: números reais, fatos contraintuitivos, tendências recentes, citações de autoridade
4. Usar esses dados como base pro texto — preferir dados concretos a afirmações genéricas

Se o input já for texto pronto ou link, pular essa fase.

---

### Fase 1 — Texto

1. Ler `_contexto/preferencias.md` pra calibrar o tom de voz
2. Ler `_contexto/empresa.md` pra entender o contexto e o público
3. Se o input for um link, usar WebFetch pra buscar o conteúdo
4. Definir o ângulo do carrossel: educacional, oportunidade, contrário, provocativo ou inspiracional
5. Escrever 8-10 slides seguindo o **fluxo de curiosidade**:
   - **Slide 1 (Capa — abrir o loop):** título que gera uma pergunta na cabeça de quem vê, sem responder. 3 opções de título (max 8 palavras cada) + subtítulo — o usuário escolhe antes de continuar
   - **Slides 2-3 (Tensão):** aprofundar o problema ou a contradição. Não resolver ainda. Fazer o leitor sentir que precisa continuar
   - **Slides 4-6 (Desenvolvimento):** um insight por slide com dado ou exemplo concreto. Cada slide termina com uma virada ou pergunta implícita que puxa pro próximo
   - **Slide 7-8 (Virada):** o ponto central do carrossel — o insight que muda a perspectiva. O momento em que o loop começa a fechar
   - **Slide 9 (Implicação):** "o que isso muda pra quem tá lendo?" — consequência prática
   - **Slide final (CTA — fechar o loop):** entregar a conclusão + chamada pra ação. O leitor deve sentir que chegou em algum lugar

**Regra do loop de curiosidade:**
- A capa abre uma tensão ("por que X acontece?", "o erro que 90% comete", "o que ninguém te conta sobre X")
- Os slides do meio sustentam a tensão sem resolver — cada um entrega um pedaço, não o todo
- O slide de virada entrega o insight principal
- O CTA fecha com a resposta + próximo passo

**Tom do texto:**
- Frases longas e naturais (2-4 frases por slide), não bullet points disfarçados
- Frases curtas e picotadas ficam com cara de IA — evitar
- Seguir as regras de `_contexto/preferencias.md` (sem travessões se indicado, etc)

6. Salvar o texto em `conteudo/carrosseis/[tema]/carousel-text.md`

**CHECKPOINT:** mostrar o texto completo + as 3 opções de capa. Esperar o usuário escolher a capa e aprovar o texto antes de seguir pra Fase 2.

---

### Fase 2 — Visual (HTMLs + PNGs)

1. Ler `marca/design-guide.md` pra aplicar a identidade visual
2. Se o design guide estiver vazio ou com campos em branco, avisar:
   > "Seu design-guide.md ainda não tem as cores e fontes definidas. Vou usar um layout limpo padrão agora. Pra personalizar, preenche o arquivo marca/design-guide.md e chama /carrossel de novo."
3. Criar HTMLs (1080x1350px, inline CSS, Google Fonts como única dependência externa)

**Padrão visual dos slides:**
- Fundo: cor definida no design guide (ou #0D0D0D se não definido)
- Tipografia: fontes do design guide (ou Bricolage Grotesque + Instrument Serif padrão)
- Cor de destaque: cor do design guide (ou #FFD600 padrão)
- Variação visual: não fazer todos os slides com layout idêntico — usar pelo menos 2 layouts diferentes (ex: texto simples, destaque com número grande, card com borda, citação em destaque)
- Último slide: apenas branding e CTA, sem texto longo

4. Salvar HTMLs em `conteudo/carrosseis/[tema]/instagram/`
5. Renderizar cada HTML em PNG via CLI:
   ```bash
   npx playwright screenshot --viewport-size=1080,1350 --full-page "file:///caminho/absoluto/slide-XX.html" "slide-XX.png"
   ```
   - Renderizar slide 1 primeiro e mostrar pro usuário antes de renderizar os demais

**CHECKPOINT:** mostrar slide 1 renderizado. Se aprovado, renderizar os demais.

Salvar PNGs em `conteudo/carrosseis/[tema]/instagram/`.

---

### Fase 2.5 — Slides de vídeo (opcional)

Quando o usuário quiser um slide com vídeo rodando (ex: demo de site, app, automação):

1. Criar o slide HTML normalmente com um `<video>` tag na área de destaque:
   ```html
   <video class="site-video" autoplay muted loop playsinline>
     <source src="../nome-do-video.webm" type="video/webm">
     <source src="../nome-do-video.mp4" type="video/mp4">
   </video>
   ```
2. O usuário coloca o arquivo de vídeo na pasta raiz do carrossel (ex: `conteudo/carrosseis/[tema]/`)
3. Criar o script de gravação `gravar-slide-XX.js` na pasta `instagram/`:

   ```javascript
   const { chromium } = require('../../../../node_modules/playwright');
   const path = require('path');
   const fs = require('fs');

   (async () => {
     const slideUrl = 'file:///' + path.resolve(__dirname, 'slide-XX.html').replace(/\\/g, '/');
     const browser = await chromium.launch();
     const context = await browser.newContext({
       viewport: { width: 1080, height: 1350 },
       recordVideo: { dir: __dirname, size: { width: 1080, height: 1350 } }
     });
     const page = await context.newPage();
     await page.goto(slideUrl, { waitUntil: 'networkidle' });

     // Esconder badges e indicadores de gravação
     await page.addStyleTag({
       content: `.live-badge { display: none !important; } [data-playwright-recording] { display: none !important; }`
     });

     // Remover loop — vídeo toca até o final
     await page.evaluate(() => {
       const video = document.querySelector('.site-video');
       if (video) { video.removeAttribute('loop'); video.play(); }
     });

     console.log('Aguardando o vídeo terminar...');
     await page.waitForFunction(() => {
       const v = document.querySelector('.site-video');
       return !v || v.ended;
     }, { timeout: 180000 });

     await page.waitForTimeout(500);
     const videoPath = await page.video().path();
     await context.close();
     await browser.close();

     const finalPath = path.join(__dirname, 'slide-XX.webm');
     if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
     fs.renameSync(videoPath, finalPath);
     console.log('Vídeo salvo: slide-XX.webm');
   })();
   ```

4. Rodar o script:
   ```bash
   cd conteudo/carrosseis/[tema]/instagram && PLAYWRIGHT_BROWSERS_PATH="C:/Users/kalid/AppData/Local/ms-playwright" node gravar-slide-XX.js
   ```

**Regras do slide de vídeo:**
- Esconder badges visuais (ex: "AO VIVO") via `addStyleTag` no script — não no HTML
- Remover `loop` do vídeo antes de gravar pra capturar do início ao fim
- O resultado é um `.webm` que vai como slide de vídeo no carrossel do Instagram
- Instagram aceita mistura de PNG + vídeo no mesmo carrossel

---

### Fase 3 — Versão TikTok (opcional)

Após finalizar o Instagram, perguntar:
> "Quer a versão TikTok também? (1080x1920, formato vertical para stories/reels)"

Se sim:
- Adaptar os HTMLs: height 1920px, ajustar padding, aumentar fonte levemente
- Renderizar via CLI:
  ```bash
  npx playwright screenshot --viewport-size=1080,1920 --full-page "file:///caminho/absoluto/slide-XX.html" "slide-XX.png"
  ```
- Salvar em `conteudo/carrosseis/[tema]/tiktok/`

---

## Output final

```
conteudo/carrosseis/[tema]/
  carousel-text.md               ← texto aprovado + legenda sugerida
  nome-do-video.webm             ← vídeo fonte (se houver slide de vídeo)
  avatar.png                     ← foto do perfil
  instagram/
    slide-01.html → slide-01.png
    slide-02.html → slide-02.png
    slide-XX.html → slide-XX.webm  ← slide de vídeo (se houver)
    gravar-slide-XX.js             ← script de gravação (se houver)
    ...
  tiktok/ (se solicitado)
    slide-01.html → slide-01.png
    ...
```

## Regras

- Texto aprovado na Fase 1 não muda na Fase 2
- Sempre mostrar slide 1 antes de renderizar os demais
- Se o usuário pedir ajuste no visual, editar o HTML e re-renderizar apenas o slide alterado
- Sem travessões (—) no texto por padrão, a menos que o preferencias.md indique o contrário
