# Web3Forms — Referência e Erros Conhecidos

**Access key:** `f65a41ca-f8a1-4a6e-bde4-fdeb6672298b`

---

## Padrão que funciona

### HTML obrigatório dentro do `<form>`
```html
<input type="hidden" name="access_key" value="f65a41ca-f8a1-4a6e-bde4-fdeb6672298b" />
<input type="hidden" name="subject" value="Assunto do email" />
<input type="hidden" name="from_name" value="Nome do remetente" />
<input type="text" name="botcheck" style="display:none" tabindex="-1" autocomplete="off" />
```

### Submit via fetch (JSON)
```javascript
const data = Object.fromEntries(new FormData(form));
data.botcheck = false; // obrigatório no payload JSON

const res = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify(data)
});

const json = await res.json();
if (json.success) { /* ok */ }
```

---

## Erros conhecidos e como evitar

### 5. `#success-screen` dentro do mesmo container do form
**Sintoma:** form some após envio mas tela de sucesso não aparece — página fica com só o header visível.
**Causa:** manipulação de DOM dentro do success block quebra referências a elementos filhos (`getElementById` retorna null ou o elemento foi removido antes de ser lido).
**Fix:** colocar o `#success-screen` fora do `.wrapper`, montar o HTML via `innerHTML` no JS e ocultar o `.wrapper` inteiro:
```javascript
document.querySelector('.wrapper').style.display = 'none';
const screen = document.getElementById('success-screen');
screen.innerHTML = `<div>...conteúdo...</div>`;
screen.style.display = 'flex';
```


### 1. botcheck como `type="checkbox"`
**Sintoma:** formulário não envia, sem erro visível no console, Web3Forms não recebe nada.
**Causa:** checkbox desmarcado não entra no FormData. Web3Forms exige o campo presente.
**Fix:** usar `type="text"` com `style="display:none"`. O campo fica vazio (valor `""`), que é o correto para indicar que não é bot. No payload JSON, forçar `data.botcheck = false`.

### 2. botcheck ausente no payload JSON
**Sintoma:** igual ao anterior — submissão silenciosa sem entrega.
**Causa:** ao construir o data com `Object.fromEntries(new FormData(form))`, o campo `botcheck` text vazio pode ser omitido dependendo do browser.
**Fix:** sempre adicionar `data.botcheck = false` explicitamente antes do `fetch`.

### 3. Múltiplos checkboxes com o mesmo `name`
**Sintoma:** só o último valor marcado é enviado.
**Causa:** `Object.fromEntries` sobrescreve chaves duplicadas.
**Fix:** usar `name="campo[]"` e processar manualmente:
```javascript
const checked = [...form.querySelectorAll('input[name="campo[]"]:checked')].map(el => el.value);
data['campo'] = checked.join(', ') || '—';
delete data['campo[]'];
```

### 4. Cache de script antigo
**Sintoma:** alterações no JS não refletem no site após upload.
**Fix:** adicionar cache busting na tag script: `<script src="main.js?v=3.1"></script>`. Incrementar a versão a cada deploy.

---

## Campos opcionais úteis

| Campo | Descrição |
|---|---|
| `subject` | Assunto do email recebido |
| `from_name` | Nome exibido no remetente |
| `replyto` | Email para responder (usar o campo `email` do form) |
| `redirect` | URL para redirecionar após sucesso (alternativa ao JS) |

---

## Verificação rápida antes de subir um form

- [ ] `access_key` presente como `type="hidden"`
- [ ] `botcheck` presente como `type="text"` com `display:none`
- [ ] `data.botcheck = false` no payload do fetch
- [ ] Checkboxes múltiplos tratados manualmente (não via `Object.fromEntries` direto)
- [ ] Testado com o Network tab aberto (ver resposta da API)
