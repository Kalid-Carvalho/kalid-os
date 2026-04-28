# Carrossel — 30 dias, VS Code + Claude, 3 sistemas do zero
**Canal:** @kalidcarvalho
**Formato:** Tweet Card (9 slides)
**Data:** 2026-04-28

---

## Slides

**Slide 1 (Capa)**
30 dias, VS Code + Claude, 3 sistemas do zero.

Aqui está o resultado.

---

**Slide 2 — tweet 1/7**
Por anos fiquei tão ocupado entregando pra outros que nunca testei o que conseguia construir. A demissão em março forçou. Abril foi o primeiro mês construindo pra mim. Aqui estão os 3 sistemas que saíram do zero.

---

**Slide 3 — tweet 2/7**
O primeiro foi o SDR. O sistema busca empresas no Google, valida quais têm WhatsApp ativo, lê o site de cada uma e escreve uma mensagem específica pro negócio delas antes de disparar. SerpAPI, Jina AI, OpenAI e Evolution API conectados via n8n. Descrito no VS Code, executado pelo Claude.

---

**Slide 4 — tweet 3/7**
O detalhe que quase quebrou tudo: WhatsApp no Brasil aceita números com 12 e 13 dígitos dependendo da operadora e da região. Mandar pro formato errado não entrega. Tive que construir uma lógica que testa os dois formatos antes de enviar. Esse nó levou mais tempo que o resto do fluxo combinado.

---

**Slide 5 — tweet 4/7**
O segundo foi o funil de cold email. Três workflows rodando em paralelo: prospecção diária, follow-up no D+2 e follow-up no D+7. Com rastreamento de abertura de email. Tudo automático, tudo registrado em planilha. O funil roda sozinho. Eu só reviso as respostas que chegam.

---

**Slide 6 — tweet 5/7**
O terceiro foi o agente de atendimento. Quando um lead chega, o agente lê o histórico, entende o contexto e responde com a linguagem do negócio. 51 nodes no n8n. Não é um bot com menu. É um agente que raciocina antes de responder. Construído inteiramente descrevendo o que precisava acontecer.

---

**Slide 7 — tweet 6/7**
O padrão que ficou claro em abril: eu descrevo o que precisa acontecer, o Claude executa, eu reviso e ajusto. O gargalo parou de ser "saber implementar" e virou "saber descrever com precisão". Dois meses atrás eu não sabia que isso era possível. Agora é o meu fluxo de trabalho.

---

**Slide 8 — tweet 7/7**
Maio vem com mais builds. Próximo na fila: agente de qualificação de leads com memória, integração com CRM e dashboard de acompanhamento. Se você quer ver como isso é construído na prática, me segue. Posto o processo inteiro, incluindo o que quebra no caminho.

---

**Slide 9 (CTA)**
Construindo em público.
Todo o processo, sem filtro.
@kalidcarvalho

---

## Legenda

Abril foi o primeiro mês construindo pra mim.

3 sistemas do zero: SDR que lê o site do prospect, funil de cold email automático e agente de atendimento.

Tudo com VS Code + Claude como executor.

O gargalo não é mais saber implementar. É saber descrever o problema com precisão.

Arrasta pra ver como foi feito.

#buildinpublic #ia #automacao #n8n #vscode #builder #kalidcarvalho
