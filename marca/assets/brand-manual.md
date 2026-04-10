# Manual de Marca — Kalid Carvalho
**Versão 1.0 | Março 2026**

> Este documento define a identidade visual da marca pessoal Kalid Carvalho.
> Deve ser seguido por designers, programadores, agentes de IA e qualquer pessoa
> que produza conteúdo visual sob esta marca.

---

## 1. Identidade

### Quem é a marca
Kalid Carvalho é especialista em crescimento digital para pequenas e médias empresas. Combina desenvolvimento técnico (sites de alta performance, agentes de IA) com estratégia de aquisição de clientes (tráfego pago, conteúdo). A marca é pessoal — Kalid é o produto.

### Conceito visual
**Bold Human** — autoridade técnica com presença humana. A marca não é fria como uma empresa de software, nem genérica como um coach. É direta, competente e com personalidade.

### Posicionamento
- Público: empresários e empreendedores brasileiros
- Plataformas principais: Instagram, Reels, TikTok (futuro)
- Tom: direto, contrarian, orientado a resultado

---

## 2. Logo

### Logotipo tipográfico
O logo de Kalid Carvalho é baseado em tipografia — sem símbolo ou ícone. O contraste de peso entre as duas linhas cria a personalidade visual da marca.

```
KALID        ← Space Grotesk 700 (bold)
CARVALHO     ← Space Grotesk 300 (light)
─────────    ← divider 3px
Sites e Agentes de IA  ← tagline uppercase
```

### Versões do logo

| Versão | Fundo | Uso |
|--------|-------|-----|
| **Primary** | Azul Royal #1A56DB | Uso principal — redes sociais, assinaturas, apresentações |
| **Dark** | Azul Escuro #0D1526 | Fundos escuros, slides noturnos, banners dark mode |
| **Light** | Azul Gelo #F0F4FF | Fundos claros, documentos, propostas, versão impressa |

### Arquivos disponíveis

| Arquivo | Dimensões | Uso |
|---------|-----------|-----|
| `icon-kc.png` | 512×512px | Foto de perfil, favicon, watermark em vídeos, ícone de app |
| `logo-horizontal.png` | 960×320px | Cabeçalho de site, email, apresentações, banners |
| `logo-vertical.png` | 600×600px | Posts quadrados, bio links, cartão de visita |
| `logo-primary.png` | 800×400px | Wordmark — fundo azul royal (uso em materiais digitais) |
| `logo-dark.png` | 800×400px | Wordmark — fundo escuro |
| `logo-light.png` | 800×400px | Wordmark — fundo claro, documentos |
| `*.html` | — | Fonte vetorial de cada logo (HTML/CSS editável) |

### Regras do logo
- **Nunca distorcer** o logo (esticar, comprimir, rotacionar)
- **Nunca mudar as cores** fora das versões definidas
- **Zona de proteção:** manter ao redor do logo um espaço equivalente à altura da letra "K"
- **Tamanho mínimo:** 200px de largura em digital; 4cm em impresso

---

## 3. Cores

### Paleta principal

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Azul Royal** | `#1A56DB` | 26, 86, 219 | Cor âncora da marca. Fundos, botões, acentos, CTAs |
| **Azul Escuro** | `#0D1526` | 13, 21, 38 | Fundo dark mode. Slides noturnos, banners escuros |
| **Azul Gelo** | `#F0F4FF` | 240, 244, 255 | Fundo claro. Documentos, propostas, versão light |
| **Branco** | `#FFFFFF` | 255, 255, 255 | Texto sobre fundos escuros |
| **Preto** | `#0A0A0A` | 10, 10, 10 | Texto sobre fundos claros |
| **Azul Muted** | `#9BB3E8` | 155, 179, 232 | Subtextos, handles, créditos, informações secundárias |

### Combinações aprovadas

| Fundo | Texto | Contraste | Status |
|-------|-------|-----------|--------|
| #1A56DB | #FFFFFF | 4.6:1 | ✅ WCAG AA |
| #0D1526 | #FFFFFF | 16.2:1 | ✅ WCAG AAA |
| #0D1526 | #9BB3E8 | 5.8:1 | ✅ WCAG AA |
| #F0F4FF | #1A56DB | 4.7:1 | ✅ WCAG AA |
| #F0F4FF | #0A0A0A | 18.1:1 | ✅ WCAG AAA |
| #FFFFFF | #1A56DB | 4.6:1 | ✅ WCAG AA |

### O que nunca fazer com as cores
- Não usar azul sobre azul (baixo contraste)
- Não usar #9BB3E8 como texto principal — apenas secundário
- Não adicionar cores novas sem aprovação (vermelho, laranja, verde não fazem parte da marca)

---

## 4. Tipografia

### Família principal
**Space Grotesk** — disponível gratuitamente no Google Fonts.

```
https://fonts.google.com/specimen/Space+Grotesk
CSS: @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

### Escala tipográfica

| Nível | Tamanho | Peso | Letter-spacing | Uso |
|-------|---------|------|----------------|-----|
| **Display** | 80–88px | 700 | -2px | Logo, hero de carrosséis, títulos de capa |
| **Hero** | 60–68px | 700 | -1px | Títulos principais de posts e slides |
| **Heading** | 44px | 600 | 0 | Subtítulos, seções |
| **Body** | 34px | 500 | 0 | Texto corrido em posts e slides |
| **Caption** | 22–24px | 400–500 | 0 | Handles, créditos, notas de rodapé |
| **Tag/Label** | 20–22px | 600 | 3–5px | Tags de categoria, labels em uppercase |
| **Mínimo absoluto** | 20px | 400 | — | Nenhum texto legível abaixo disso |

### Hierarquia visual
A leitura deve sempre seguir esta ordem:
1. Display/Hero — captura atenção
2. Heading — contextualiza
3. Body — entrega o valor
4. Caption — atribui autoria/fonte

### Fallback para web
Se Space Grotesk não carregar:
```css
font-family: 'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif;
```

---

## 5. Elementos Visuais

### Border-radius
- **Botões e badges:** 8px
- **Cards:** 12px
- **Avatar/foto:** 50% (circular)

### Divisor de acento
Linha horizontal ou borda lateral usada para dar respiração e separar seções:
```css
/* Horizontal */
border-top: 1px solid #1E2E4A;

/* Lateral (borda de destaque) */
border-left: 4–6px solid #1A56DB;
padding-left: 24–36px;
```

### Badge de categoria
Usado em posts e slides para identificar o tipo de conteúdo:
```css
background: #1A56DB;
color: #FFFFFF;
font-size: 20–22px;
font-weight: 600;
letter-spacing: 3–5px;
text-transform: uppercase;
padding: 8–12px 20–28px;
border-radius: 8px;
```

### Avatar / Foto de perfil
- Kalid usa foto real (não inicial ou ícone)
- Formato circular com borda `2px solid #2563EB`
- Tamanho nos posts: 60–70px de diâmetro

---

## 6. Especificações por Plataforma

### Instagram Carrossel (formato principal)
- **Dimensões:** 1080 × 1440px (3:4 portrait)
- **Estrutura de slides:**
  - Slide 1: Hook (hero text + subtítulo + swipe indicator)
  - Slides 2–N-1: Conteúdo (um conceito por slide, sem sobrecarga)
  - Último slide: CTA (pergunta + chamada para seguir/comentar)
- **Header padrão** em todo slide:
  - Avatar circular (foto real) + "Kalid Carvalho" + ✓ verificação + @eukalidcarvalho
  - Fundo do header: #0D1526 com borda inferior `1px solid #1E2E4A`
- **Fontes mínimas:** Hero 58px, Body 34px, Caption 24px
- **Sem contador de slides** — o Instagram mostra indicadores nativos

### Instagram Story / Reel (capa)
- **Dimensões:** 1080 × 1920px (9:16 portrait)
- **Zona segura:** evitar 250px no topo e rodapé (UI do Instagram cobre)
- **Fontes mínimas:** Hero 56px, Body 32px, Caption 20px

### Meta Ads (anúncios pagos)
- **Feed quadrado:** 1080 × 1080px
- **Feed horizontal:** 1200 × 628px
- **Stories/Reels:** 1080 × 1920px
- **Regra de texto:** máx. 20% da área com texto (recomendação Meta)

### LinkedIn
- **Post único:** 1200 × 627px
- **Carrossel:** 1080 × 1080px
- **Fontes mínimas:** Hero 40px, Body 24px, Caption 20px

### Site (para o programador)

#### Variáveis CSS
```css
:root {
  /* Cores */
  --color-primary:     #1A56DB;
  --color-dark:        #0D1526;
  --color-light:       #F0F4FF;
  --color-white:       #FFFFFF;
  --color-black:       #0A0A0A;
  --color-muted:       #9BB3E8;

  /* Tipografia */
  --font-family:       'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-display:      700;
  --font-heading:      600;
  --font-body:         500;
  --font-caption:      400;

  /* Espaçamento */
  --space-xs:          8px;
  --space-sm:          16px;
  --space-md:          24px;
  --space-lg:          48px;
  --space-xl:          72px;

  /* Bordas */
  --radius-sm:         8px;
  --radius-md:         12px;
  --radius-full:       9999px;
}
```

#### Tipografia web responsiva
```css
/* Desktop */
h1 { font-size: clamp(36px, 5vw, 72px); font-weight: 700; }
h2 { font-size: clamp(24px, 3vw, 48px); font-weight: 600; }
p  { font-size: clamp(16px, 1.5vw, 20px); font-weight: 500; }

/* Mobile first */
body { font-size: 16px; font-family: var(--font-family); }
```

---

## 7. Tom de Voz

### Princípios
- **Direto:** sem rodeios. A primeira frase entrega o ponto principal.
- **Contrarian:** abre concordando com o senso comum e vira o argumento.
- **Orientado a resultado:** métricas, casos reais, não teoria.
- **Humano:** fala como pessoa, não como marca corporativa.

### O que evitar
- Linguagem técnica desnecessária sem explicação
- Promessas exageradas sem base
- Copy genérico ("transforme seu negócio hoje!")
- Hashtags em excesso (máx. 15, mistura de alto volume + nicho)

### Handle oficial
- Instagram: **@eukalidcarvalho**
- Usar consistentemente em todos os materiais

---

## 8. Uso Incorreto (Proibido)

| ❌ Proibido | ✅ Correto |
|------------|-----------|
| Mudar as cores do logo | Usar apenas as 3 versões definidas |
| Usar fontes diferentes de Space Grotesk | Usar Space Grotesk ou o fallback definido |
| Adicionar cores novas sem aprovação | Usar apenas a paleta de 6 cores |
| Texto menor que 20px em qualquer peça digital | Respeitar a escala tipográfica |
| Logo em versões não aprovadas (ex: transparente sem fundo) | Usar os arquivos PNG fornecidos |
| Usar "Sites que Vendem" como tagline nas redes sociais | Usar "Sites e Agentes de IA" |
| Avatar com letra ou ícone placeholder | Foto real do Kalid obrigatória |

---

## 9. Arquivos de Referência

Todos os arquivos estão em:
```
squads/designer-visual/output/2026-03-26-183656/entrega/
├── icon-kc.png           ← símbolo KC (avatar, favicon, watermark)
├── logo-horizontal.png   ← símbolo + nome horizontal (site, email)
├── logo-vertical.png     ← símbolo + nome vertical (posts, bio)
├── logo-primary.png      ← wordmark azul (materiais digitais)
├── logo-dark.png         ← wordmark fundo escuro
├── logo-light.png        ← wordmark fundo claro
├── *.html                ← fonte vetorial de cada logo
├── sample-slide.png      ← exemplo de carrossel Instagram
└── brand-manual.md       ← este documento
```

Design system técnico completo em:
```
squads/designer-visual/output/2026-03-26-183656/design-system.md
```

---

*Manual gerado pelo squad Designer Visual — Opensquad | 2026-03-26*
