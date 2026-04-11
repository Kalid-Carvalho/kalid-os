# Arquitetura do Site GROVW

## Situação atual (fase de transição WordPress → HTML)

### Por que a pasta `ads-grovw/` existe?
O WordPress está instalado na raiz do `public_html`. Para rodar o site HTML sem desinstalar o WordPress, o site HTML ficou dentro de uma subpasta chamada `ads-grovw/`. Uma regra no `.htaccess` faz o domínio raiz servir esse conteúdo.

---

## Estrutura atual no servidor

```
public_html/
│
├── ads-grovw/               ← SITE PRINCIPAL (HTML)
│   ├── index.html           → grovw.com.br/
│   └── assets/
│       ├── css/final.css
│       ├── css/style.css
│       └── img/ + js/
│
├── obrigado/                ← RAIZ (sobe direto no public_html)
│   └── index.html           → grovw.com.br/obrigado/
│
├── privacidade/             ← RAIZ (sobe direto no public_html)
│   └── index.html           → grovw.com.br/privacidade/
│
├── termos/                  ← RAIZ
│   └── index.html           → grovw.com.br/termos/
│
├── briefing/                ← RAIZ
│   └── index.html           → grovw.com.br/briefing/
│
├── briefings/               ← RAIZ — onboarding por cliente/parceiro
│   └── alexandreneto/
│       └── index.html       → grovw.com.br/briefings/alexandreneto/
│
├── contrato/                ← RAIZ
│   └── index.html           → grovw.com.br/contrato/
│
├── wp-admin/                ← WordPress (não mexer)
├── wp-content/              ← WordPress (não mexer)
├── wp-includes/             ← WordPress (não mexer)
└── .htaccess                ← Regra de redirecionamento
```

---

## Regra atual no `.htaccess`

```apache
RedirectMatch ^/$ /ads-grovw/
```

**O que faz:** redireciona apenas a raiz (`grovw.com.br/`) para a pasta `ads-grovw/`.

**O que NÃO faz:** não interfere em nenhuma outra rota. As pastas `privacidade/`, `termos/`, `briefing/` e `contrato/` ficam na raiz e funcionam normalmente.

**Efeito colateral:** a URL no navegador muda de `grovw.com.br/` para `grovw.com.br/ads-grovw/`. Isso não afeta SEO enquanto o canonical do `index.html` apontar para `https://grovw.com.br/`.

---

## Referência de caminhos nos arquivos HTML

### Dentro de `ads-grovw/` (index.html, obrigado.html)
| O que referenciar | Caminho correto |
|---|---|
| CSS | `assets/css/final.css` |
| Imagens | `assets/img/nome.png` |
| JS | `assets/js/main.js` |
| Link privacidade | `/privacidade/` |
| Link termos | `/termos/` |
| Link briefing | `/briefing/` |
| Link contrato | `/contrato/` |
| Redirect obrigado | `https://grovw.com.br/obrigado/` |

### Dentro de `privacidade/` e `termos/` (na raiz)
| O que referenciar | Caminho correto |
|---|---|
| CSS do GROVW | `/ads-grovw/assets/css/final.css` |
| CSS custom | `/ads-grovw/assets/css/style.css` |
| Favicon | `/ads-grovw/assets/img/favicon.svg` |
| Link voltar ao site | `/` |
| Link entre si | `/privacidade/` ou `/termos/` |

### Dentro de `briefing/` e `contrato/` (na raiz)
CSS próprio embutido — sem dependência de assets externos.

---

## Quando o WordPress for removido (migração para HTML puro)

### O que muda
1. Remover o WordPress do servidor
2. Mover o conteúdo de `ads-grovw/` para a raiz do `public_html`
3. Remover a linha `RedirectMatch ^/$ /ads-grovw/` do `.htaccess`

### O que precisa ser atualizado nos arquivos

**`index.html` e `obrigado.html`** — nenhuma mudança (caminhos já são relativos)

**`privacidade/index.html` e `termos/index.html`** — atualizar os paths de:
```html
<!-- Antes -->
<link href="/ads-grovw/assets/css/final.css" rel="stylesheet" />
<link href="/ads-grovw/assets/css/style.css" rel="stylesheet" />
<link rel="icon" href="/ads-grovw/assets/img/favicon.svg">

<!-- Depois -->
<link href="/assets/css/final.css" rel="stylesheet" />
<link href="/assets/css/style.css" rel="stylesheet" />
<link rel="icon" href="/assets/img/favicon.svg">
```

**`.htaccess`** — remover a linha do RedirectMatch e manter apenas as regras de cache/compressão do WP Rocket (que continuam válidas mesmo sem WordPress).

### Estrutura final após migração
```
public_html/
├── index.html
├── obrigado.html
├── assets/
├── privacidade/index.html
├── termos/index.html
├── briefing/index.html
└── contrato/index.html
```

---

## Checklist de upload atual

### → Vai para `ads-grovw/` no servidor
- [ ] `index.html`
- [ ] `obrigado.html`
- [ ] `assets/css/final.css`
- [ ] `assets/css/style.css`
- [ ] `assets/img/` (todas as imagens)
- [ ] `assets/js/main.js`
- [ ] `assets/js/tailwind-config.js`

### → Vai para a raiz do `public_html`
- [ ] `obrigado/index.html`
- [ ] `privacidade/index.html`
- [ ] `termos/index.html`
- [ ] `briefing/index.html`
- [ ] `briefings/alexandreneto/index.html`
- [ ] `contrato/index.html`
