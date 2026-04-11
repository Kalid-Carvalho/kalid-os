---
name: roteiro-youtube
description: Cria roteiros completos para vídeos do YouTube no formato câmera + tela. Pesquisa dados atuais, estrutura o script com indicações de corte, narração e demo. Canal @kalidcarvalho (IA e tech, em português, para o mercado brasileiro).
type: skill
---

# Skill: Roteiro YouTube

## Quando usar
Quando o usuário pedir pra criar um roteiro de vídeo pro YouTube, transformar uma ideia em script, ou planejar um vídeo sobre ferramenta de IA ou automação.

---

## Dependências
- `_contexto/empresa.md` — contexto do negócio e posicionamento
- `_contexto/preferencias.md` — tom de voz
- `_contexto/fontes-referencia.md` — referências do canal @kalidcarvalho

---

## Input

O usuário fornece:
- **Ideia ou tema** do vídeo (ex: "como usei o Claude pra construir um agente de prospecção")
- **Ferramenta principal** que vai ser demonstrada (ex: Claude Code, N8N, Typebot)
- **Resultado tangível** que o vídeo vai mostrar (ex: "um bot que responde leads no WhatsApp")
- **Duração estimada** (padrão: 8 a 12 minutos)

Se o usuário não informar o resultado tangível, perguntar:
> "Qual é o resultado concreto que a pessoa vai ver no vídeo? O que vai aparecer na tela funcionando?"

---

## Formato do script

O script usa três marcações de cena:

- `[CÂMERA]` — talking head, Kalid na frente da câmera falando diretamente pro espectador
- `[TELA]` — screen recording mostrando ferramenta, código, resultado
- `[CORTE]` — sugestão de b-roll, texto na tela, zoom, destaque visual

Cada bloco tem:
- Indicação de tempo estimado
- Narração escrita (o que falar, não só o tema)
- Instrução de tela quando for [TELA]

---

## Workflow

### Fase 0 — Pesquisa

1. Ler `_contexto/fontes-referencia.md` pra calibrar o nível de referências
2. Usar WebSearch pra buscar:
   - Vídeos populares sobre o mesmo tema no YouTube (ver ângulos que funcionam)
   - Dados ou estatísticas recentes sobre a ferramenta ou caso de uso
   - O que o público brasileiro ainda não entende bem sobre o tema

Extrair: números reais, ângulos pouco explorados, dores específicas do público.

---

### Fase 1 — Ângulo e título

Antes de escrever, definir:

1. **O ângulo**: o que diferencia esse vídeo dos outros sobre o mesmo tema?
   - Mostrar o resultado final antes de explicar como foi feito
   - Revelar um erro comum que as pessoas cometem
   - Comparar antes/depois de usar a ferramenta
   - Mostrar quanto tempo/dinheiro economizou

2. **3 opções de título** seguindo boas práticas de YouTube:
   - Número + benefício concreto: "Eu construí um agente de IA em 2 horas usando só o Claude"
   - Revelação: "O sistema que uso pra captar clientes no automático (sem contratar ninguém)"
   - Desafio/resultado: "Tentei automatizar minha prospecção com IA — veja o que aconteceu"

3. **Thumbnail concept**: descrever o que deve aparecer na thumbnail (expressão, texto, elemento visual). Para gerar o PNG da thumbnail, usar `/thumbnail-youtube` depois do roteiro aprovado

**CHECKPOINT:** mostrar ângulo + 3 títulos + conceito de thumbnail. Esperar o usuário escolher antes de continuar.

---

### Fase 2 — Script completo

Estrutura padrão (adaptar conforme o conteúdo):

#### HOOK — 0:00 a 0:30 [CÂMERA]
Não há introdução. Começar com o resultado ou com a promessa.
- Mostrar o resultado final funcionando OU fazer uma afirmação forte que gera curiosidade
- Não dizer "olá, seja bem-vindo ao canal"
- Terminar o hook com uma frase que force o espectador a continuar

Exemplo de estrutura:
> "Eu construí isso em duas horas. [mostra tela brevemente] Um agente que prospecta advogados no automático, manda mensagem personalizada e registra tudo num CRM. Nesse vídeo eu mostro exatamente como funciona."

#### CONTEXTO — 0:30 a 2:00 [CÂMERA + TELA]
- Qual era o problema antes
- Por que as soluções comuns não funcionam
- O que esse vídeo vai entregar de diferente
- [TELA] mostrar o problema na prática (ex: processo manual, planilha, ferramenta antiga)

#### DEMO — 2:00 a 8:00 [TELA com narração]
Dividir em etapas claras. Para cada etapa:
- [TELA] instrução do que mostrar na tela
- Narração: o que falar enquanto mostra (não descrever o que está visível — explicar o porquê)
- [CÂMERA] cortes curtos (10-20s) para pontos de insight ou explicações que precisam de presença

Cada etapa deve ter um mini-resultado visível antes de passar pra próxima.

#### RESULTADO — 8:00 a 9:30 [CÂMERA + TELA]
- Mostrar o sistema funcionando do início ao fim
- Quantificar: tempo economizado, custo, leads gerados, clientes atendidos
- Comparar com o antes

#### CTA — 9:30 ao fim [CÂMERA]
- Uma única chamada pra ação (não empilhar pedidos)
- Sugerir o próximo vídeo relacionado
- Não pedir inscrição de forma genérica — pedir com contexto: "Se você quer ver como eu conectei isso ao WhatsApp, esse vídeo aqui é o próximo passo"

---

### Fase 3 — Checklist antes de gravar

Após o script, gerar um checklist:

```
ANTES DE GRAVAR:
[ ] Testar a demo do início ao fim (sem travar ao vivo)
[ ] Limpar a tela: fechar abas desnecessárias, notificações off
[ ] Preparar os arquivos/ferramentas que vão aparecer na tela
[ ] Definir o ponto de corte entre câmera e tela no setup de gravação

DURANTE A GRAVAÇÃO:
[ ] Gravar o hook em pelo menos 3 takes
[ ] Na demo: falar em voz alta o que está fazendo, mesmo que pareça óbvio
[ ] Pausar alguns segundos antes e depois de cada corte planejado (facilita edição)

PÓS-GRAVAÇÃO:
[ ] Thumbnail: capturar o frame ou tirar foto separada
[ ] Descrição do vídeo: primeiras 2 linhas devem conter a palavra-chave principal
```

---

## Output

Salvar em:
```
conteudo/youtube/AAAA-MM-DD-titulo-do-video/
  roteiro.md       ← script completo com marcações de cena
  checklist.md     ← checklist de gravação
```

Exemplo: `conteudo/youtube/2026-04-11-agente-prospeccao-claude/`

---

## Regras

- Nunca começar o script com "Olá" ou saudação
- Narração escrita em tom de conversa direta — como se estivesse falando pra uma pessoa, não apresentando
- Cada bloco [TELA] deve ter instrução específica do que mostrar, não só "mostrar a ferramenta"
- O hook deve funcionar sozinho — se alguém vir só os primeiros 30 segundos, já entende o valor do vídeo
- Sem travessões no texto
- Referências do canal: Filipe Deschamps (profundidade), Jack Roberts (@Itssssss_Jack, resultado prático antes da explicação)
