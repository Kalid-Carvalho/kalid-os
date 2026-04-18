---
name: tracking-completo
description: >
  Setup completo de tracking digital para clientes GROVW: GTM em site estático, Meta Pixel + CAPI server-side via N8N, GA4, notificação WhatsApp via Evolution API e formulário HTML nativo com dataLayer. Use sempre que um cliente precisar de tracking, pixel, analytics, conversões, CAPI, GA4 ou quando o formulário do site não estiver gerando leads rastreáveis. Cobre diagnóstico, implementação, testes e validação do funil completo.
---

# Tracking Completo — GROVW

Setup end-to-end de tracking para sites estáticos de clientes. Cobre Meta Pixel (client-side via GTM), CAPI server-side (N8N), GA4, notificação WhatsApp e formulário nativo.

## Informações necessárias antes de começar

Coletar do cliente ou verificar no projeto:

| Item | Onde encontrar |
|---|---|
| GTM Container ID | `GTM-XXXXXXX` — criar em tagmanager.google.com |
| Meta Pixel ID | Gerenciador de Eventos do Meta |
| Meta CAPI Access Token | Events Manager → Configurações → API de Conversões |
| GA4 Measurement ID | `G-XXXXXXXXXX` — criar em analytics.google.com |
| Evolution API instance | Nome da instância ativa no api.kalidcarvalho.com |
| WhatsApp de notificação | Número do cliente para receber leads (com DDI 55) |
| Webhook N8N | `https://webhook.kalidcarvalho.com/webhook/SLUG-DO-CLIENTE` |

---

## Etapa 1 — Formulário HTML nativo com dataLayer

Substituir qualquer formulário externo (RVOps, Typeform, etc.) por formulário nativo. O formulário deve:
- Coletar: `nome`, `whatsapp`, `especialidade`, `cidade` (ajustar conforme o cliente)
- Enviar via `fetch` para o webhook do N8N
- Fazer `dataLayer.push` com os dados do lead antes do redirect
- Redirecionar para `/obrigado/` após sucesso

### Template do script do formulário

```html
<script>
const leadForm = document.getElementById('lead-form');
if (leadForm) {
  leadForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const fd = new FormData(this);
    const eventId = 'SLUG-' + Date.now() + '-' + Math.random().toString(36).substr(2,9);
    const payload = {
      nome: fd.get('nome'),
      whatsapp: fd.get('whatsapp'),
      especialidade: fd.get('especialidade'),
      cidade: fd.get('cidade'),
      origem: 'dominio.com.br',
      url: window.location.href,
      event_id: eventId,
      timestamp: new Date().toISOString()
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_submitted',
      lead_nome: payload.nome,
      lead_whatsapp: payload.whatsapp,
      lead_especialidade: payload.especialidade,
      lead_cidade: payload.cidade,
      lead_event_id: eventId
    });
    try {
      await fetch('https://webhook.kalidcarvalho.com/webhook/SLUG-DO-CLIENTE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch(err) { console.error(err); }
    window.location.href = '/obrigado/';
  });
}
</script>
```

**Atenção:** O `dataLayer.push` deve vir **antes** do `fetch` e do redirect, para garantir que o GTM capture os dados antes da navegação.

---

## Etapa 2 — Instalar GTM no site

Adicionar os dois snippets do GTM em **todas as páginas** (index.html, obrigado.html, ads/meta/index.html, ads/google/index.html):

```html
<!-- No <head>, o mais alto possível -->
<script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Logo após <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

Usar o código exato fornecido pelo GTM (não modificar).

---

## Etapa 3 — Configurar GTM: Variáveis DLV

Criar as seguintes variáveis do tipo **Variável da camada de dados** no GTM:

| Nome da variável | Chave na camada de dados |
|---|---|
| `DLV - lead_nome` | `lead_nome` |
| `DLV - lead_whatsapp` | `lead_whatsapp` |
| `DLV - lead_especialidade` | `lead_especialidade` |
| `DLV - lead_cidade` | `lead_cidade` |
| `DLV - lead_event_id` | `lead_event_id` |

---

## Etapa 4 — Configurar GTM: Triggers

### Trigger 1 — Lead Form Submit
- Tipo: **Evento personalizado**
- Nome do evento: `lead_submitted`
- Nome: `FB | Lead Form Submit`

### Trigger 2 — Obrigado Page (NÃO usar para Lead — só se necessário para outras tags)
- Tipo: **Exibição de página**
- Condição: Page URL contém `/obrigado`
- Nome: `FB | Obrigado Page`

> **Atenção:** Nunca vincular o trigger `FB | Obrigado Page` à tag de Lead. Isso causa duplicação de evento. Usar apenas `FB | Lead Form Submit` nas tags de conversão.

---

## Etapa 5 — Configurar GTM: Tags

### Tag 1 — Meta Pixel PageView
- Tipo: **HTML personalizado**
- Nome: `FB | Page View`
- Trigger: **All Pages**

```html
<script>
!function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'PIXEL_ID_AQUI');
fbq('track', 'PageView');
</script>
```

### Tag 2 — Meta Pixel Lead
- Tipo: **HTML personalizado**
- Nome: `FB | Lead Event`
- Trigger: **FB | Lead Form Submit** (somente este)

```html
<script>
var eventId = 'SLUG-' + Date.now() + '-' + Math.random().toString(36).substr(2,9);
fbq('track', 'Lead', {
  content_category: {{DLV - lead_especialidade}},
  content_name: {{DLV - lead_cidade}}
}, {
  eventID: eventId
});
</script>
```

### Tag 3 — GA4 Configuration
- Tipo: **Google Tag**
- Tag ID: `G-XXXXXXXXXX`
- Nome: `GA4 | Configuration`
- Trigger: **All Pages**

### Tag 4 — GA4 Lead Event
- Tipo: **Google Analytics: evento do GA4**
- Tag de configuração: `GA4 | Configuration`
- Nome do evento: `generate_lead`
- Nome: `GA4 | Lead`
- Trigger: **FB | Lead Form Submit**
- Parâmetros:
  - `especialidade` → `{{DLV - lead_especialidade}}`
  - `cidade` → `{{DLV - lead_cidade}}`
  - `nome` → `{{DLV - lead_nome}}`

---

## Etapa 6 — Criar workflow N8N

Criar workflow chamado `[CLIENTE] — Lead → Meta CAPI + WhatsApp` com 5 nós:

```
Recebe Lead (Webhook POST /SLUG)
    ↓
Prepara Payload CAPI (Code)
    ↓ ↓ (paralelo)
Meta CAPI        Notifica WhatsApp
    ↓ ↓
Responde OK (Respond to Webhook)
```

### Nó 1 — Webhook
- Path: `SLUG-DO-CLIENTE`
- Method: POST
- Response mode: Response Node

### Nó 2 — Code (SHA256 puro, sem require crypto)

```javascript
function sha256hex(str) {
  function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
  const mw = Math.pow(2, 32);
  let result = '', words = [], hash = [], k = [], pc = 0;
  const ic = {};
  for (let c = 2; pc < 64; c++) {
    if (!ic[c]) {
      for (let i = 0; i < 313; i += c) ic[i] = c;
      hash[pc] = (Math.pow(c, 0.5) * mw) | 0;
      k[pc++] = (Math.pow(c, 1/3) * mw) | 0;
    }
  }
  str += '\x80';
  while (str.length % 64 !== 56) str += '\x00';
  const abl = (str.length - 1) * 8;
  for (let i = 0; i < str.length; i++) words[i >> 2] |= str.charCodeAt(i) << ((3 - i % 4) * 8);
  words[words.length] = (abl / mw) | 0;
  words[words.length] = abl;
  for (let j = 0; j < words.length;) {
    const w = words.slice(j, j += 16), oh = hash.slice(0);
    for (let i = 0; i < 64; i++) {
      const w15 = w[i-15], w2 = w[i-2], a = hash[0], e = hash[4];
      const t1 = hash[7] + (rr(e,6)^rr(e,11)^rr(e,25)) + ((e&hash[5])^(~e&hash[6])) + k[i]
        + (w[i] = i < 16 ? w[i] : (w[i-16]+(rr(w15,7)^rr(w15,18)^(w15>>>3))+w[i-7]+(rr(w2,17)^rr(w2,19)^(w2>>>10)))|0);
      const t2 = (rr(a,2)^rr(a,13)^rr(a,22)) + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2]));
      hash = [(t1+t2)|0].concat(hash);
      hash[4] = (hash[4]+t1)|0;
      hash.length = 8;
    }
    hash = hash.map((x,i) => (x+oh[i])|0);
  }
  hash.forEach(x => { for (let i = 7; i >= 0; i--) result += ((x>>>(i*4))&0xF).toString(16); });
  return result;
}

// ATENÇÃO: dados chegam em $input.first().json.body (não .json direto)
const item = $input.first().json.body;

const phone = (item.whatsapp || item.telefone || '').replace(/\D/g, '');
const name = (item.nome || '').toLowerCase().trim();
const city = (item.cidade || '').toLowerCase().trim();
const email = (item.email || '').toLowerCase().trim();

const eventTime = item.timestamp
  ? Math.floor(new Date(item.timestamp).getTime() / 1000)
  : Math.floor(Date.now() / 1000);

const eventId = item.event_id || `SLUG-${Date.now()}`;

const payload = {
  data: [{
    event_name: 'Lead',
    event_time: eventTime,
    event_id: eventId,
    action_source: 'website',
    event_source_url: item.url || 'https://dominio.com.br',
    user_data: {
      ph: phone ? sha256hex(phone) : undefined,
      fn: name ? sha256hex(name) : undefined,
      ct: city ? sha256hex(city) : undefined,
      em: email ? sha256hex(email) : undefined
    },
    custom_data: {
      especialidade: item.especialidade || '',
      origem: item.origem || 'dominio.com.br'
    }
  }],
  access_token: 'TOKEN_CAPI_AQUI'
};

const waLink = `https://wa.me/55${phone}?text=Ol%C3%A1%2C%20${encodeURIComponent(item.nome)}%21%20Vi%20seu%20interesse%20e%20quero%20conversar.`;

const notifMsg = `🔔 Novo lead\n👤 ${item.nome}\n📱 ${item.whatsapp || item.telefone}\n🏥 ${item.especialidade}\n📍 ${item.cidade || item.email}\n\n👉 Entrar em contato agora:\n${waLink}`;

return [{ json: { capiPayload: payload, notifMsg, leadData: item } }];
```

### Nó 3 — Meta CAPI (HTTP Request)
- Method: POST
- URL: `https://graph.facebook.com/v19.0/PIXEL_ID/events`
- Body: JSON → `={{ JSON.stringify($json.capiPayload) }}`

### Nó 4 — Notifica WhatsApp (HTTP Request)
- Method: POST
- URL: `https://api.kalidcarvalho.com/message/sendText/NOME-DA-INSTANCIA`
- Header: `apikey: KalidAPI2026!`
- Body: `={{ JSON.stringify({ number: 'NUMERO_NOTIFICACAO', text: $json.notifMsg }) }}`

> **Atenção Evolution API v2:** O campo é `text` direto no body, não `textMessage: { text }`.

### Nó 5 — Respond to Webhook
- Respond with: JSON
- Body: `{ "ok": true }`

---

## Etapa 7 — Página /obrigado/

A página de obrigado deve estar em uma **pasta** `/obrigado/index.html` no servidor, não como arquivo `obrigado.html` na raiz (o redirect do form aponta para `/obrigado/`).

Todos os caminhos de assets devem ser **absolutos** (iniciar com `/`):

```html
<!-- Correto -->
<link rel="stylesheet" href="/assets/css/style.css">
<img src="/assets/img/logo.png">
<a href="/">Voltar</a>

<!-- Errado — quebra quando servido de /obrigado/ -->
<link rel="stylesheet" href="assets/css/style.css">
<img src="assets/img/logo.png">
<a href="index.html">Voltar</a>
```

---

## Etapa 8 — Testar e validar

### 8.1 GTM Preview
1. Abre GTM → Preview → cola a URL do site
2. Submete o formulário
3. Verifica no Tag Assistant:
   - `FB | Page View` disparou 1x no page view inicial
   - `FB | Lead Event` disparou 1x no form submit
   - `GA4 | Lead` disparou 1x no form submit
   - Nenhuma tag disparou 2x

### 8.2 Meta Test Events (CAPI)
1. Events Manager → pixel → Testar eventos
2. Copia o `test_event_code` (ex: `TEST89132`)
3. Adiciona temporariamente no payload do N8N: `test_event_code: 'TEST89132'`
4. Submete o formulário
5. Confirma evento `Lead` com origem **Servidor** no Events Manager
6. Remove o `test_event_code` do N8N após validação

### 8.3 GA4 Tempo Real
1. GA4 → Relatórios → Tempo real
2. Submete formulário
3. Confirma evento `generate_lead` na lista "Contagem de eventos"

### 8.4 WhatsApp
- Confirmar que a notificação chegou com nome, telefone, especialidade, cidade e link direto

---

## Etapa 9 — Publicar e finalizar

1. GTM → **Enviar** → publica o container
2. GA4 → Administrador → Eventos → aguarda até 24h → marca `generate_lead` como **conversão** (estrela)
3. Sobe todos os arquivos HTML para o servidor via paramiko SFTP:

```python
import paramiko, os

host, port, user, pwd = 'IP', PORTA, 'usuario', 'senha'
remote_root = 'domains/dominio.com.br/public_html'
local_root = r'caminho/local/site'

files = [
    ('index.html', 'index.html'),
    ('obrigado/index.html', 'obrigado/index.html'),  # pasta, não arquivo raiz
    ('ads/meta/index.html', 'ads/meta/index.html'),
    ('ads/google/index.html', 'ads/google/index.html'),
]

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(host, port=port, username=user, password=pwd)
sftp = ssh.open_sftp()

for local_rel, remote_rel in files:
    local_path = os.path.join(local_root, local_rel.replace('/', os.sep))
    remote_path = f'{remote_root}/{remote_rel}'
    try:
        sftp.put(local_path, remote_path)
        print(f'OK: {remote_rel}')
    except Exception as e:
        print(f'ERRO: {remote_rel} — {e}')

sftp.close()
ssh.close()
```

---

## Pendências comuns por cliente

- [ ] Integrar leads ao CRM/RVOps do cliente via nó adicional no N8N
- [ ] Configurar Google Ads conversion tracking (requer Conversion ID + Label)
- [ ] Atualizar variáveis DLV quando o formulário mudar de campos
- [ ] Configurar server-side GTM no VPS para máximo de dados (futuro)

---

## Erros conhecidos e soluções

| Erro | Causa | Solução |
|---|---|---|
| `Module 'crypto' is disallowed` | N8N task runner bloqueia require() | Usar SHA256 puro em JS (código acima) |
| Lead disparando 2x | Tag com 2 triggers (form submit + obrigado page) | Remover trigger de page view da tag Lead |
| CSS quebrado em /obrigado/ | Caminhos relativos de assets | Usar caminhos absolutos (`/assets/...`) |
| `instance does not exist` | Nome errado da instância Evolution API | Verificar nome exato no painel da API |
| `instance requires property "text"` | Evolution API v2 não usa `textMessage` | Usar `text` direto no body |
| Dados em `$input.first().json.body` | Webhook encapsula body dentro de `.body` | Sempre acessar `.json.body` no N8N |
