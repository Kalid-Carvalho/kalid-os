# Carrossel — Implementei um SDR com Claude Code + n8n
Canal: @kalidcarvalho
Data: 2026-04-24

---

## SLIDE 1 — Capa
Implementei um SDR automático que lê o site do prospect antes de mandar mensagem.
*Fiz com Claude Code + n8n. Veja como ficou.*

---

## SLIDE 2 — O problema
Prospecção manual tem dois problemas: é lenta e é genérica.

Você passa horas pesquisando empresas, monta uma mensagem que serve pra todo mundo e manda. A pessoa recebe e sente que é mais um na lista. Porque é.

---

## SLIDE 3 — A pergunta que mudou tudo
E se antes de mandar qualquer mensagem, a IA lesse o site da empresa e escrevesse uma mensagem sobre o negócio dela especificamente?

Não "olá, vi sua empresa e tenho uma proposta". Algo que mostra que você sabe o que ela faz.

---

## SLIDE 4 — A arquitetura
O sistema faz isso em sequência:

SerpAPI busca empresas por nicho e cidade. Valida quais números têm WhatsApp. Jina AI raspa o site de cada empresa. OpenAI lê o conteúdo e escreve a mensagem. Evolution API dispara. Google Sheets registra tudo.

---

## SLIDE 5 — O detalhe que quase quebrou tudo
WhatsApp no Brasil aceita números com 12 e 13 dígitos dependendo da operadora e da região.

Mandar pro formato errado: mensagem não entrega. Tive que construir uma lógica que testa os dois formatos e verifica qual está ativo antes de enviar. Esse nó sozinho levou mais tempo que o resto do fluxo.

---

## SLIDE 6 — Como o Claude Code entrou
Descrevi o fluxo inteiro pro Claude Code via MCP do n8n. Ele mapeou os nodes, conectou as integrações e sugeriu a lógica de validação de número que eu não tinha pensado.

Não escrevi JSON de workflow na mão. Descrevi o que queria em linguagem natural e iterei até funcionar.

---

## SLIDE 7 — O que a personalização muda
A diferença entre uma mensagem genérica e uma que cita o produto da empresa, o mercado que ela atende e o problema que ela provavelmente tem é visível na taxa de resposta.

A IA não inventa. Ela lê o que está no site e usa isso pra montar o contexto da abordagem.

---

## SLIDE 8 — O que aprendi
Automação sem personalização é spam em escala. Personalização sem automação não escala.

O valor não está em mandar mais mensagens. Está em mandar a mensagem certa pra pessoa certa, de forma que pareça manual mesmo sendo automático.

Claude Code + n8n resolveu os dois lados ao mesmo tempo.

---

## SLIDE 9 — CTA
Estou documentando tudo que estou construindo aqui.

Se você quer acompanhar builds como esse, me siga.

@kalidcarvalho

---

## LEGENDA INSTAGRAM

Implementei um SDR que lê o site do prospect antes de mandar mensagem.

SerpAPI busca a empresa. Jina AI raspa o site. OpenAI escreve a mensagem com o contexto do negócio dela. Evolution API dispara no WhatsApp. Tudo automático.

O detalhe que quase quebrou: WhatsApp no Brasil aceita 12 e 13 dígitos. Tive que construir uma lógica que testa os dois antes de enviar.

Fiz com Claude Code + n8n. Arrasta pra ver a arquitetura completa.

#claudecode #n8n #automacao #ia #buildinpublic #sdr #prospecção #agentesia #nocode #builder
