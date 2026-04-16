---
name: prospectar
description: Pesquisa e monta lista de leads qualificados a partir de nicho e cidade, filtrando emails genéricos e salvando no formato do CRM.
type: skill
---

# Skill: Prospectar

## Quando usar
Quando o usuário pedir pra montar lista de prospecção, pesquisar leads, ou encontrar contatos de um nicho específico.

## Inputs
- **Nicho:** tipo de profissional ou segmento (ex: "advogados trabalhistas", "advogados de família")
- **Cidade:** cidade ou região (ex: "Manaus", "São Paulo", "cidades médias do Paraná")
- **Quantidade:** quantos leads quer (padrão: 20)

Se o usuário não informar algum desses, perguntar antes de começar.

## Processo

### 1. Pesquisar
Usar WebSearch para buscar contatos. Combinar buscas como:
- `"advogado trabalhista" "Manaus" site:instagram.com`
- `"advogado trabalhista Manaus" contato email`
- `"OAB" "advogado" "Manaus" "trabalhista" site:jusbrasil.com.br`
- `"escritório de advocacia" "Manaus" "trabalhista"`

Variar as buscas para cobrir: sites próprios, Instagram, LinkedIn, Jusbrasil, OAB.

### 2. Qualificar cada lead
Para cada lead encontrado, verificar se tem sinais de que pode pagar pelo serviço:
- Tem site próprio (mesmo que desatualizado)
- Tem Instagram ou LinkedIn ativo
- É autônomo ou sócio de escritório pequeno (1 a 10 pessoas)
- Atua em área com ticket médio razoável (trabalhista, família, consumidor, previdenciário, criminal)

Descartar:
- Grandes escritórios (mais de 20 advogados)
- Sem presença digital nenhuma
- Emails genéricos: contato@, atendimento@, info@, juridico@, adm@, secretaria@, recepcao@

### 3. Montar o CSV
Formato compatível com `prospecção/crm-prospeccao.csv`:

```
nome;escritorio;especialidade;email;whatsapp;tem_site;canal_abordagem;status;data_contato;data_followup;resposta;observacao
```

Regras:
- `email`: só emails pessoais (nome@dominio, nome@gmail, nome@hotmail). Se não encontrar, deixar em branco.
- `whatsapp`: incluir DDD. Se não encontrar, deixar em branco.
- `tem_site`: "sim" ou "nao"
- `canal_abordagem`: "email" se tiver email pessoal, "whatsapp" se só tiver número, "ambos" se tiver os dois
- `status`: deixar em branco (será preenchido na prospecção)
- `data_contato`, `data_followup`, `resposta`, `observacao`: deixar em branco

### 4. Checar duplicatas
Antes de salvar, ler `prospecção/crm-prospeccao.csv` e comparar cada lead novo com os já existentes.

Critérios de duplicata (qualquer um que bater):
- Mesmo WhatsApp
- Mesmo email
- Mesmo nome + mesmo escritório

Leads duplicados não entram na lista nova. Ao final, informar quantos foram descartados por já estarem no CRM.

### 5. Salvar
Salvar o arquivo em:
```
prospecção/listas/AAAA-MM-DD-nicho-cidade.csv
```

Exemplo: `prospecção/listas/2026-04-10-trabalhista-manaus.csv`

### 6. Apresentar resultado
Mostrar um resumo:
- Quantos leads encontrados
- Quantos descartados por duplicata
- Quantos têm email pessoal
- Quantos têm só WhatsApp
- Quantos têm os dois
- Caminho do arquivo salvo

Perguntar: "Quer que eu adicione esses leads direto no CRM principal (`crm-prospeccao.csv`) ou prefere revisar primeiro?"

---

## Revisão semanal de duplicatas

Quando o usuário pedir "revisa o CRM" ou "checa duplicatas" (ou toda segunda-feira se tiver rotina configurada):

1. Ler `prospecção/crm-prospeccao.csv`
2. Identificar linhas com WhatsApp, email ou nome+escritório repetidos
3. Mostrar as duplicatas encontradas no formato:
   ```
   DUPLICATA: [Nome A] e [Nome B] — mesmo WhatsApp: 92999999999
   ```
4. Perguntar qual manter antes de remover qualquer linha
5. Só apagar depois da confirmação do usuário

## Observações
- Priorizar email pessoal sempre. Lead sem email e sem WhatsApp não entra na lista.
- Se a busca retornar poucos resultados, tentar variações de busca antes de avisar o usuário.
- Futuramente: automação de disparo via WhatsApp Business API + N8N.
