# Site GROVW — Claude Code OS

## O que é esse projeto
Site principal da GROVW (grovw.com.br). HTML puro com CSS inline + JS vanilla. Sem framework, sem build step. Uma página única de captação + páginas auxiliares (`/privacidade`, `/termos`, `/obrigado`, `/briefings`).

**Arquivo principal de trabalho:** `index.html` (versão atual em produção) e `index-v2.html` (redesign em review).

---

## Design system GROVW

Antes de qualquer tarefa visual, seguir estritamente:

| Token | Valor |
|---|---|
| Fundo principal | `#000000` |
| Fundo seções | `#0a0a0a` / `#111111` |
| Surface / cards | `#161616` |
| Accent | `#cdff00` (limão neon) |
| Accent hover | `#d0ff0f` |
| Texto principal | `#ffffff` |
| Texto secundário | `#888888` |
| Bordas | `rgba(255,255,255,0.07)` |
| Fonte principal | Inter (Google Fonts) |
| Fonte mono/técnica | JetBrains Mono |

**Estilo:** Digital Architect — dark, tech, high-performance.

**Nunca:** fundo claro, cores vibrantes além do limão, tipografia serifada, botões pill (border-radius excessivo), layout sem grid estrutural.

---

## Estrutura de seções (index.html)

1. **Nav** — fixo, backdrop-blur, logo GROVW em JetBrains Mono limão
2. **Hero** — headline principal, CTA principal, diagrama do sistema
3. **Marquee** — strip animado com stats/capabilities
4. **Problema** — "Site parado não traz cliente" — 2 colunas
5. **Processo** — 4 passos em grid: Briefing → Construção → Tráfego → Leads
6. **Diferenciais** — 3 cards: aparece pra quem quer, página converte, lead qualificado
7. **Portfólio** — grid 3 colunas com hover (Advotary, Justice, Buitrago & Pordeus)
8. **Planos** — 3 cards: Entrada (R$1.400), Ecossistema (R$2k+3k/mês), Completo (R$5k+2k/mês)
9. **Depoimento** — Marcos Almeida, Almeida Consultoria
10. **Sobre** — Kalid Carvalho, Manaus, solo
11. **Contato + Form** — Web3Forms, campos: empresa, nome, WhatsApp, email, LGPD
12. **Footer** — links privacidade/termos, copyright

---

## Formulário de captação

- **Provedor:** Web3Forms — `access_key: f65a41ca-f8a1-4a6e-bde4-fdeb6672298b`
- **Subject:** "Novo lead | GROVW Site"
- **Campos obrigatórios:** empresa, nome, mobile_phone, email, LGPD checkbox
- **Campo oculto:** `plano` — preenchido via JS quando usuário clica num card de plano
- **Botcheck:** campo honeypot `name="botcheck"` com `display:none` — nunca remover
- Após submit bem-sucedido: esconder form, mostrar estado de sucesso

---

## WhatsApp principal

```
https://wa.me/5592984627621
```
Usar em todos os CTAs e botão flutuante. Parâmetro de texto: `Olá, vim do site GROVW.`

---

## Arquitetura de servidor

Ver `ARQUITETURA.md` para detalhe completo. Resumo:

- Site HTML fica em `ads-grovw/` no servidor por conta do WordPress ainda instalado na raiz
- `.htaccess` redireciona `grovw.com.br/` → `ads-grovw/`
- Pastas `/privacidade/`, `/termos/`, `/obrigado/`, `/briefings/` ficam na **raiz** do `public_html`
- Quando WordPress for removido: mover `ads-grovw/` para raiz, remover linha do RedirectMatch

---

## Regras de edição

- **Editar `index.html`** para ajustes no site atual em produção
- **Editar `index-v2.html`** para o redesign em review (arquivo standalone, sem dependência de CSS externo)
- `index-v2.html` tem tudo inline (CSS em `<style>`, JS em `<script>`) — manter assim
- `index.html` depende de `assets/css/final.css`, `assets/css/style.css` e `assets/js/main.js`
- Não criar novos arquivos CSS externos — o `index-v2.html` deve continuar self-contained
- Imagens dos cases ficam em `assets/img/` — nomes: `advotary.png`, `justice.png`, `buitragoepordeus.png`

---

## Conteúdo e tom

Tom de voz GROVW: direto, assertivo, dados antes de adjetivos. Vocabulário: "sistema", "máquina de clientes", "conversão", "qualificado", "previsível".

Nunca usar: travessões, bullet points desnecessários, emojis no site, promessas absolutas, enrolação.

---

## Deploy

Upload manual via FTP/cPanel:
- `index.html` e `assets/` → pasta `ads-grovw/` no servidor
- Páginas auxiliares → raiz do `public_html`

Ver checklist completo em `ARQUITETURA.md`.

---

## Páginas auxiliares

| URL | Arquivo local |
|---|---|
| `/privacidade/` | `_raiz/privacidade/index.html` |
| `/termos/` | `_raiz/termos/index.html` |
| `/obrigado/` | `_raiz/obrigado/index.html` |
| `/briefings/alexandreneto/` | `briefings/alexandreneto/index.html` |
