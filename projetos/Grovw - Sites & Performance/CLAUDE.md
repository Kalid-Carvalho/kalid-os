# GROVW — Claude Code OS

## O que é essa pasta
Todos os projetos digitais da GROVW (grovw.com.br). HTML puro com CSS inline + JS vanilla. Sem framework, sem build step.

```
GROVW/
├── CLAUDE.md                   ← este arquivo
├── site-grovw/                 ← site principal de captação
├── links-grovw/                ← página de links (linktree)
├── formulario-briefing.html    ← formulário de qualificação de leads
└── formulario-contrato.html    ← coleta de dados para emissão de contrato
```

---

## Projeto: site-grovw

Site principal da GROVW (grovw.com.br). Uma página única de captação + páginas auxiliares (`/privacidade`, `/termos`, `/obrigado`, `/briefings`).

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

## Páginas auxiliares (site-grovw)

| URL | Arquivo local |
|---|---|
| `/privacidade/` | `site-grovw/_raiz/privacidade/index.html` |
| `/termos/` | `site-grovw/_raiz/termos/index.html` |
| `/obrigado/` | `site-grovw/_raiz/obrigado/index.html` |
| `/briefings/alexandreneto/` | `site-grovw/briefings/alexandreneto/index.html` |

---

## Projeto: links-grovw

**Arquivo:** `links-grovw/index.html`
**URL em produção:** não definida (usar como grovw.com.br/links ou bio de rede social)
**Propósito:** página de links estilo Linktree para bio de Instagram/LinkedIn

**Estrutura:**
- Logo GROVW em JetBrains Mono limão
- Bio: "Site + tráfego pago + IA no WhatsApp..."
- Badge "Disponível" com pulse animado
- Botão primário: WhatsApp → `wa.me/5592984627621` (fundo limão)
- Botão secundário: link para `grovw.com.br`
- Ícones sociais: Instagram, LinkedIn, YouTube — **hrefs ainda em `#`, precisam ser preenchidos**

**Dependências externas (diferente dos outros arquivos):**
- Usa Tailwind CDN + `assets/js/tailwind-config.js`
- Usa `assets/css/style.css` do site principal
- Ao editar, manter compatibilidade com as classes Tailwind customizadas (`grovw-accent`, `grovw-border`, etc.)

**O que falta:**
- Preencher hrefs dos ícones sociais (Instagram, LinkedIn, YouTube)

---

## Projeto: formulario-briefing.html

**Arquivo:** `formulario-briefing.html`
**URL sugerida:** `grovw.com.br/briefing/` (sobe na raiz do servidor)
**Propósito:** qualificação de leads — preenchido pelo prospect antes da call ou como alternativa ao WhatsApp

**Estrutura do formulário:**
- Seção 01 — Sobre você: nome, WhatsApp, área de atuação
- Seção 02 — Sobre o negócio: situação atual, maior dificuldade, o que já tentou, meta de leads/mês, verba disponível
- Checkboxes visuais (cards clicáveis) e radio groups para seleção de opções

**Técnico:**
- Self-contained (CSS inline, sem dependência externa)
- Web3Forms — `access_key: f65a41ca-f8a1-4a6e-bde4-fdeb6672298b`
- Subject: `"Novo briefing — GROVW"`
- Botcheck honeypot presente — nunca remover
- Estado de sucesso embutido no HTML (ocultar form, mostrar `.success-msg`)

---

## Projeto: formulario-contrato.html

**Arquivo:** `formulario-contrato.html`
**URL sugerida:** `grovw.com.br/contrato/` (sobe na raiz do servidor)
**Propósito:** coleta de dados do cliente após fechamento — alimenta geração do contrato

**Estrutura do formulário:**
- Seção 01 — Dados Pessoais: nome completo, CPF/CNPJ, data de nascimento, email, WhatsApp
- Seção 02 — Endereço: CEP, estado, logradouro, bairro, cidade, número, complemento
- Seção 03 — Escritório/Empresa: nome da empresa, segmento

**Nota importante no topo do form:**
> "Use os dados exatamente como constam no CPF ou CNPJ. Endereço completo com CEP facilita emissão no mesmo dia."

**Técnico:**
- Self-contained (CSS inline, sem dependência externa)
- Web3Forms — `access_key: f65a41ca-f8a1-4a6e-bde4-fdeb6672298b`
- Subject: `"Dados de contrato — GROVW"`
- Botcheck honeypot presente — nunca remover
- Estado de sucesso embutido (`.success-msg`)

---

## Web3Forms — access key unificada

Todos os formulários usam a mesma chave:
```
f65a41ca-f8a1-4a6e-bde4-fdeb6672298b
```
Respostas chegam no email vinculado à conta Web3Forms de Kalid.
