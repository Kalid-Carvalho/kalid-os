---
name: subir-leads
description: Importa leads de um arquivo CSV para a planilha Google Sheets do funil de cold mail GROVW. Detecta formato Apollo ou Sheets, filtra emails genéricos e deduplica automaticamente.
type: project
---

# Subir Leads para a Planilha

## Quando usar
Sempre que o usuário disser "sobe os leads", "importa os leads", "adiciona os leads", ou indicar um arquivo CSV de leads para subir.

## Fluxo completo

### 1. Identificar o arquivo e a conta

Perguntar ao usuário (ou inferir do contexto):
- **Caminho do CSV** — se não informado, listar .csv em `prospecção/listas/` e perguntar
- **Conta Gmail** — `kalidcarvalhomkt` ou `kalid.carvalho12` (padrão: `kalidcarvalhomkt`)
  - Se quiser dividir 50/50 entre as duas contas, aplicar na hora do mapeamento

### 2. Ler o arquivo

Usar o `Read` tool para ler o CSV completo.

### 3. Detectar formato e mapear colunas

**Formato Apollo** — tem colunas `First Name`, `Last Name`, `Company Name`:
| Apollo | Sheets |
|---|---|
| First Name | firstName |
| Last Name | lastName |
| Title | title |
| Company Name | company |
| Email | email |
| Website | website |

**Formato Sheets** — já tem `firstName`, `lastName`, `email`, etc.: usar direto.

### 4. Filtrar emails inválidos

Remover leads onde o email:
- Está vazio ou sem `@`
- Começa com: `contato@`, `atendimento@`, `info@`, `suporte@`, `financeiro@`, `comercial@`, `sac@`, `faleconosco@`, `hello@`, `contact@`, `noreply@`, `no-reply@`
- Contém: `@example`, `@sentry`, `wix.com`, `wordpress.com`

### 5. Montar e enviar o payload

Usar Python + curl via Bash. Salvar payload em arquivo temporário para evitar problemas com aspas:

```bash
python3 -c "
import csv, json, sys

GENERIC = ['contato@','atendimento@','info@','suporte@','financeiro@','comercial@','sac@','faleconosco@','hello@','contact@','noreply@','no-reply@']
INVALID_DOMAINS = ['@example','@sentry','wix.com','wordpress.com']

def valid(email):
    e = email.lower().strip()
    if not e or '@' not in e: return False
    if any(e.startswith(p) for p in GENERIC): return False
    if any(d in e for d in INVALID_DOMAINS): return False
    return True

leads = []
with open('CAMINHO_DO_CSV', encoding='utf-8-sig') as f:
    r = csv.DictReader(f)
    headers = r.fieldnames or []
    is_apollo = 'First Name' in headers
    for row in r:
        email = (row.get('Email') or row.get('email') or '').strip()
        if not valid(email): continue
        if is_apollo:
            leads.append({'firstName': row.get('First Name','').strip(), 'lastName': row.get('Last Name','').strip(), 'title': row.get('Title','').strip(), 'company': row.get('Company Name','').strip(), 'email': email, 'website': row.get('Website','').strip(), 'conta': 'CONTA'})
        else:
            leads.append({'firstName': row.get('firstName','').strip(), 'lastName': row.get('lastName','').strip(), 'title': row.get('title','').strip(), 'company': row.get('company','').strip(), 'email': email, 'website': row.get('website','').strip(), 'conta': row.get('Conta','CONTA').strip()})

print(json.dumps({'leads': leads}))
" > /tmp/leads_payload.json

curl -s -X POST "https://webhook.kalidcarvalho.com/webhook/importar-leads" \
  -H "Content-Type: application/json" \
  -d @/tmp/leads_payload.json
```

Substituir `CAMINHO_DO_CSV` e `CONTA` antes de executar.

### 6. Interpretar e reportar resultado

A resposta do webhook retorna:
```json
{ "success": true, "imported": 15, "skipped": 3, "total": 18 }
```

Reportar ao usuário: **X leads importados**, Y duplicados ignorados, Z total processado.

## Referências

| Item | Valor |
|---|---|
| Planilha ID | `1b75vwZzDKtnB9xO57n_4b2Z3Vzpim8O4LfmLffCwfRE` |
| Aba | `Leads` |
| Webhook N8N | `https://webhook.kalidcarvalho.com/webhook/importar-leads` |
| Workflow N8N | `GROVW — Importar Leads` |
| Status padrão | `Pendente` |
| Campos obrigatórios | `email`, `company` |
| Campos opcionais | `firstName`, `lastName`, `title`, `website` |
