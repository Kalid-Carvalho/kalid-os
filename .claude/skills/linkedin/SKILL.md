---
name: linkedin
description: Cria posts semanais para LinkedIn com rotação de formatos. Posicionamento como Builder/AI developer. Pode gerar posts manuais a partir de tema/notícia, ou automáticos varrendo projetos e git para building in public.
type: skill
---

# Skill: LinkedIn

## Quando usar
Quando o usuário pedir pra criar um post pro LinkedIn, ou chamar `/linkedin build` para gerar um update automático de progresso nos projetos.

---

## Dependências
- `_contexto/empresa.md` — posicionamento e contexto
- `_contexto/preferencias.md` — tom de voz
- `_contexto/fontes-referencia.md` — referências do canal @kalidcarvalho

---

## Posicionamento

**Perfil:** Kalid Carvalho — Builder. Constrói apps, agentes de IA e automações com Claude Code, N8N e Typebot. Base: Manaus, AM. Opera no Brasil.

**Objetivo do LinkedIn:** se posicionar como referência em desenvolvimento com IA no Brasil para atrair oportunidades futuras (vagas, parcerias, projetos de apps).

**Tom:** direto, técnico mas acessível, sem hype. Mostra o que construiu, não só o que sabe. Dados e resultados antes de adjetivos.

---

## Modo 1 — Post manual

### Rotação semanal de formatos

Seguir essa ordem. A cada semana, usar o próximo formato:

| Semana | Formato | Quando usar |
|---|---|---|
| 1 | Construí X em Y horas | Quando tiver algo novo construído |
| 2 | Tradução de novidade global | Quando tiver notícia relevante de IA |
| 3 | Building in public | Update de progresso em app ou projeto |
| 4 | Testei X pra você | Após testar ferramenta nova |
| Eventual | O que ninguém fala sobre X | Quando tiver opinião contrária forte |
| Eventual | Caso real (sem nome) | Quando tiver resultado de cliente |

Se o usuário não informar o formato, identificar qual é o mais adequado pro input fornecido e confirmar:
> "Esse post encaixa melhor no formato [nome]. Bora?"

---

### Estrutura dos formatos

**Formato 1 — Construí X em Y horas**
```
[Linha de hook — resultado em uma frase, sem introdução]

O que foi construído:
[2-3 linhas descrevendo o que é e o que faz]

Stack usada:
[ferramentas em lista curta]

O que aprendi:
[1-2 insights reais, não óbvios]

[CTA — pergunta ou convite pra continuar o assunto]
```

**Formato 2 — Tradução de novidade global**
```
[Nome da notícia/ferramenta] mudou alguma coisa importante.

[O que aconteceu em 2-3 linhas — sem jargão]

O que isso significa na prática pra quem trabalha com [área]:
[2-3 implicações concretas]

Minha leitura:
[opinião pessoal curta]

[CTA]
```

**Formato 3 — Building in public**
```
Semana [N] construindo [nome do projeto].

O que evoluiu:
[lista curta do que foi feito]

O que travou:
[um obstáculo real — honestidade gera engajamento]

Próximo passo:
[o que vem a seguir]

[CTA opcional]
```

**Formato 4 — Testei X pra você**
```
Passei [tempo] testando [ferramenta]. Vale ou não vale?

O que promete:
[o que a ferramenta diz que faz]

O que entregou de verdade:
[resultado real, com dado se possível]

Quem deveria usar:
[perfil específico]

Quem não precisa:
[contra-indicação honesta]

[CTA]
```

**Formato 5 — O que ninguém fala sobre X**
```
[Afirmação contrária ou dado surpreendente — primeira linha é o hook]

[Desenvolver em 3-4 parágrafos curtos com argumento e dados]

[Conclusão com posicionamento claro]

[CTA]
```

**Formato 6 — Caso real (sem nome)**
```
Um [tipo de cliente] me pediu pra resolver [problema].

Solução que montei:
[descrever o sistema/automação em termos simples]

Resultado:
[dado concreto — tempo economizado, leads gerados, custo reduzido]

O que pode replicar:
[passo a passo resumido ou ferramenta principal]

[CTA]
```

---

### Regras de formatação LinkedIn

- Primeira linha é o hook — precisa parar o scroll. Sem introdução, sem "olá"
- Parágrafos curtos: máximo 3 linhas cada, linha em branco entre eles
- Sem bullet points excessivos — texto corrido quando possível
- Sem travessões
- Hashtags no final: máximo 3, relevantes. Ex: #claudecode #IA #buildinpublic
- Comprimento ideal: 150 a 300 palavras (posts longos demais perdem engajamento)

---

## Modo 2 — Building in public automático (`/linkedin build`)

Quando o usuário chamar com argumento `build`:

### Passo 1 — Varrer projetos

Ler a pasta `projetos/` e listar os projetos ativos (pastas com arquivos modificados recentemente).

### Passo 2 — Checar git log

Rodar:
```bash
git log --since="7 days ago" --oneline --no-merges
```

Extrair: o que foi commitado na última semana, quais arquivos mudaram, qual projeto teve mais atividade.

### Passo 3 — Identificar o projeto principal da semana

Escolher o projeto com mais atividade recente ou o mais relevante estrategicamente. Se houver dúvida, perguntar:
> "Vi atividade em [projeto A] e [projeto B] essa semana. Qual quer destacar no post?"

### Passo 4 — Gerar o post

Usar o **Formato 3 — Building in public** com base no que foi encontrado:
- "O que evoluiu" → commits e mudanças reais
- "O que travou" → perguntar ao usuário: "Teve alguma coisa que travou essa semana?"
- "Próximo passo" → inferir do estado atual do projeto ou perguntar

### Passo 5 — Confirmar antes de finalizar

Mostrar o rascunho e perguntar:
> "Quer ajustar alguma coisa antes de copiar pro LinkedIn?"

---

## Geração de imagem

Após o texto aprovado, gerar uma imagem para acompanhar o post.

**Formato:** 1200x627px (landscape, padrão LinkedIn feed)
**Stack:** HTML inline CSS + Google Fonts, renderizado via Playwright

```bash
npx playwright screenshot --viewport-size=1200,627 "file:///caminho/absoluto/imagem.html" "imagem.png"
```

### Visual por tipo de post

| Formato | Tipo de imagem | Elementos |
|---|---|---|
| Construí X em Y horas | Mockup do resultado | Screenshot da ferramenta OU card com o nome do que foi construído + stack usada |
| Tradução de novidade global | Quote card | Frase-chave do post em destaque + fonte da notícia |
| Building in public | Card de progresso | Semana N, projeto, 2-3 bullets do que evoluiu |
| Testei X pra você | Card de comparação | "Promete X / Entregou Y" em dois blocos lado a lado |
| O que ninguém fala sobre X | Afirmação em destaque | Frase principal do post em tipografia grande |
| Caso real | Card de resultado | Problema → Solução → Resultado em fluxo visual simples |

### Padrão visual LinkedIn (Bold Human)
- Fundo: #0D1526
- Destaque: #1A56DB ou branco
- Fonte: Space Grotesk
- Estilo: limpo, espaçado, sem poluição visual
- Logo ou nome "Kalid Carvalho | Builder" discreto no rodapé
- Sem emojis nos visuais

### Fluxo
1. Gerar `imagem.html` com base no tipo do post
2. Renderizar com Playwright
3. Mostrar o PNG
4. Perguntar: "Quer ajustar alguma coisa na imagem?"
5. Se sim, editar e re-renderizar

---

## Output

Salvar em:
```
conteudo/linkedin/AAAA-MM-DD-formato/
  post.md        ← texto do post
  imagem.html    ← HTML da imagem
  imagem.png     ← PNG renderizado
```

Exemplo: `conteudo/linkedin/2026-04-11-building-in-public/`

---

## Ideias de pauta por fonte

Usar `_contexto/fontes-referencia.md` pra identificar quando sair conteúdo relevante:

- **The Rundown AI** → Formato 2 (tradução de novidade)
- **Cole Medin / Nick Saraev postam algo novo** → Formato 4 (testei X) ou opinião
- **Projeto novo no workspace** → Formato 1 ou Formato 3
- **Resultado de cliente** → Formato 6
- **Opinião forte sobre ferramenta ou tendência** → Formato 5
