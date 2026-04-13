---
name: criativos-trafego
description: Gera roteiros de anúncio para Meta Ads voltados à captação de clientes de tráfego pago. Use sempre que o usuário pedir "roteiros de criativo", "ideias de anúncio", "criativos para [cliente]", "roteiros para tráfego", "preciso de criativos para captar clientes", ou quando estiver montando campanhas de Meta Ads para agências de marketing/tráfego. Gera roteiros priorizados com instrução de gravação e DOCX pronto.
---

# Criativos para Tráfego — Gerador de Roteiros

Skill para gerar roteiros de anúncio no Meta Ads para agências de tráfego pago captarem novos clientes. Baseada em 9 formatos validados em campanhas reais.

## Como executar

### Passo 1 — Coletar contexto do cliente

Antes de gerar qualquer roteiro, coletar as seguintes informações. Se o usuário já forneceu parte delas na conversa, usar o que já está disponível e perguntar só o que falta.

**Perguntar:**
1. **Quem é a agência / empresa?** (nome, posicionamento, diferencial)
2. **Qual o nicho do público-alvo?** (ex: médicos, restaurantes, advogados, PMEs em geral)
3. **Qual a cidade ou região?** (campanhas locais vs. nacionais têm abordagens diferentes)
4. **Quais dados de prova social existem?** (anos de experiência, valor investido, número de clientes, resultados médios)
5. **Qual o CTA principal?** (formulário, reunião, WhatsApp, ligação)
6. **Tem alguém pra gravar vídeos?** (definir quais formatos são viáveis agora)

Se o contexto já veio do briefing do cliente ou de arquivos na pasta `clientes/`, ler esses arquivos antes de perguntar.

---

### Passo 2 — Escolher os formatos mais adequados

Com base no contexto coletado, selecionar os formatos mais relevantes dentre os 9 validados. Consultar `references/formatos.md` para descrição completa de cada formato.

**Critério de priorização:**
- Se tem alguém pra gravar → priorizar formatos #1, #3, #7, #8
- Se não tem gravação disponível agora → priorizar formatos #4 e #9
- Se tem nicho específico → sempre incluir formato #8 (vídeo nichado)
- Se tem dados de prova social (números) → sempre incluir formato #7
- Formato #1 (caixinha de perguntas) é o mais validado — incluir sempre que possível

---

### Passo 3 — Gerar os roteiros

Para cada formato selecionado, gerar um roteiro completo com:

- **Cabeçalho:** formato, duração sugerida, onde gravar
- **Script:** com marcações de tempo ([0s], [5s], etc.) e indicação de CTA
- **Instrução de gravação:** o que fazer na prática (enquadramento, tom, edição)

Adaptar o vocabulário ao nicho:
- Nicho médico → "pacientes", "consultório", "CFM", "plantão"
- Nicho restaurante → "reservas", "mesa cheia", "cardápio", "delivery"
- PMEs em geral → "empresário", "faturamento", "máquina de vendas", "resultado"
- Advocacia → "clientes", "captação ética", "autoridade digital", "OAB"

Gerar no mínimo 4 roteiros, no máximo 8. Priorizar variedade de formatos.

---

### Passo 4 — Salvar e entregar

**Salvar os arquivos:**
- Se for para um cliente → salvar em `clientes/[NOME]/criativos/roteiros/roteiros-[data].md`
- Se for para uso próprio (GROVW) → salvar em `projetos/criativos-grovw/roteiros/roteiros-[data].md`

**Gerar DOCX:**
Após salvar o `.md`, usar o script `scripts/gerar_docx.py` para gerar o DOCX automaticamente:

```bash
python .claude/skills/criativos-trafego/scripts/gerar_docx.py \
  [caminho-do-md] \
  [caminho-de-saida.docx]
```

Confirmar ao usuário os dois arquivos gerados (`.md` e `.docx`) com os caminhos.

---

### Passo 5 — Tabela de prioridade

Ao final, incluir sempre uma tabela de prioridade de execução explicando qual gravar primeiro e por quê. Critério padrão:

1. O mais rápido de gravar (ou sem câmera)
2. O que testa a abertura de copy mais forte
3. Os que dependem de ambiente ou dados externos

---

## Regras gerais

- Formato é mais importante que copy. A copy pode ser testada; o formato determina o resultado.
- CTA sempre antes dos 10 segundos em vídeos curtos. Em vídeos de 15s, CTA no 7º segundo.
- Foto real > banco de imagem. Depoimento real > roteiro elaborado.
- Campanhas nichadas performam melhor que genéricas.
- Nunca usar travessão em textos gerados.

## Referências

- `references/formatos.md` — descrição detalhada dos 9 formatos validados com exemplos
- `references/aberturas.md` — banco de aberturas de copy testadas por nicho