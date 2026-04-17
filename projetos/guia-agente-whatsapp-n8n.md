# Guia: Agente de IA no WhatsApp com N8N + Evolution API

Documentação baseada na implementação real do AGENTE - ATENDIMENTO (abril/2026).
Stack: N8N + Evolution API + Redis + Supabase + OpenAI.

---

## Bugs comuns e como corrigir

### 1. If de filtro bloqueando todas as mensagens

**Sintoma:** Webhook dispara mas nenhum node depois executa. Execuções terminam em 20ms.

**Causa:** O node de filtro (If) usa o campo `sender` do webhook para identificar quem enviou. Na Evolution API, o campo `sender` sempre contém o número da **instância** (o bot), não o remetente real.

**Fix:** Trocar o campo de filtro para `$json.body.data.key.fromMe`:
- `fromMe == false` → mensagem recebida de cliente → passa
- `fromMe == true` → mensagem enviada pelo bot → descarta

```
Condição: {{ $json.body.data.key.fromMe }} equals false
```

---

### 2. Redis Chat Memory com sessionKey hardcoded

**Sintoma:** O agente mistura contexto de conversas de usuários diferentes. A "Ana" lembra de coisas de outras pessoas.

**Causa:** O node `Redis Chat Memory` estava com `sessionKey` fixada como `"teste01"` — todos os usuários compartilhavam o mesmo histórico.

**Fix:** Usar o número do usuário como chave dinâmica:
```
sessionKey: {{ $('SET_VARIAVEIS').item.json.user.number }}
```

---

### 3. Redis não conecta (ENOTFOUND redis)

**Sintoma:** Workflow trava no primeiro node Redis por ~2 minutos e é cancelado.

**Causa:** A credencial Redis no N8N usa `redis` como host (nome do container). Em redes Docker separadas ou na rede `bridge` padrão, o DNS por nome de container não funciona entre containers.

**Diagnóstico:**
```bash
docker ps | grep redis                          # confirmar container rodando
docker inspect redis | grep IPAddress           # pegar IP real
docker exec redis redis-cli ping                # testar se Redis responde
```

**Fix:** Na credencial Redis do N8N, substituir o host `redis` pelo IP interno do container (ex: `172.16.0.2`).

**Prevenção:** Ao criar o docker-compose, colocar N8N e Redis na mesma rede nomeada com alias:
```yaml
networks:
  automation:
    driver: bridge

services:
  redis:
    networks:
      automation:
        aliases:
          - redis
  n8n:
    networks:
      - automation
```
Assim o hostname `redis` resolve corretamente.

---

### 4. Supabase demorando 60+ segundos na primeira chamada

**Sintoma:** Workflow trava por 1-2 minutos no node Supabase (GET_USER), depois continua normalmente.

**Causa:** Supabase no plano gratuito pausa o projeto após inatividade. A primeira requisição acorda o banco (cold start de 30-60 segundos).

**Fix:** Upgrade para plano pago do Supabase, ou usar PostgreSQL próprio no VPS.

**Workaround:** Configurar um cron no N8N que faz um ping no Supabase a cada 5 minutos para manter o banco ativo.

---

### 5. Evolution API não consegue enviar para contatos com LID (@lid)

**Sintoma:** Agente processa a mensagem, gera resposta, mas o envio falha com erro `400 Bad Request: exists: false`.

**Causa:** WhatsApp Multi-Device (especialmente iPhones) identifica contatos pelo formato `@lid` (Linked Device ID) em vez do número real `@s.whatsapp.net`. Versões antigas da Evolution API (< 2.3.x) não sabem resolver esse formato para envio.

**Exemplo do erro:**
```json
{"status":400,"error":"Bad Request","response":{"message":[{"exists":false,"jid":"183365122662518@lid"}]}}
```

**Fix:** Atualizar Evolution API para versão 2.3.7+. No VPS:
```bash
cd /opt/evolution-api
# Editar docker-compose.yml com a nova versão da imagem
docker compose down
docker compose pull
docker compose up -d
```

**Prevenção:** Sempre usar Evolution API 2.3.x ou superior em novas instalações.

---

### 6. Node Redis1 solto causando conflito

**Sintoma:** Node de teste desconectado no workflow que apaga a chave do Redis Chat Memory se acionado manualmente.

**Fix:** Remover qualquer node desconectado antes de colocar em produção. Nodes sem conexão são remanescentes de testes e podem causar comportamento inesperado.

---

## Boas práticas para novos agentes

### Variáveis obrigatórias no SET_VARIAVEIS

Sempre mapear separado:
- `user.number` → número limpo sem sufixo: `remoteJid.split('@')[0]`
- `user.remoteJid` → identificador completo para envio: `remoteJid` (inclui `@lid` ou `@s.whatsapp.net`)
- `message.origem` → `fromMe ? 'outcoming' : 'incoming'`

### Filtros na entrada do workflow

Ordem recomendada de filtros após o Webhook:
1. **If fromMe** → descartar mensagens enviadas pelo bot
2. **Switch por tipo** → separar AUDIO, TEXTO, IMAGEM
3. **INCOMING** → confirmar que é mensagem recebida

### Credenciais Redis

- Host: sempre usar IP do container, não nome
- Verificar com `docker inspect redis | grep IPAddress` antes de configurar

### Credenciais Evolution API

- Instância: usar `{{ $('Webhook').item.json.body.instance }}` (dinâmico)
- remoteJid para envio: usar `user.remoteJid` (com sufixo completo)
- Versão mínima recomendada: 2.3.7

### Buffer de mensagens (Wait node)

O padrão de buffer com Redis + Wait de 8 segundos é correto. Comportamento esperado:
- Primeira mensagem do ciclo: executa o fluxo completo
- Mensagens chegando dentro dos 8 segundos: adicionadas ao buffer e execução termina no SWITCH_BUFFER (normal, não é erro)
- Após 8 segundos: primeira execução processa todas as mensagens acumuladas

---

## Checklist de validação antes de entregar

- [ ] Filtro `fromMe == false` funcionando (enviar mensagem e verificar se execução passa do If)
- [ ] Redis conectando (credencial com IP do container)
- [ ] Redis Chat Memory com sessionKey dinâmica (número do usuário)
- [ ] Supabase respondendo (testar GET_USER manualmente)
- [ ] Evolution API 2.3.7+ instalada
- [ ] Node Redis1 ou outros nodes soltos removidos
- [ ] Agente gerando resposta (executar até o node Recepcionista)
- [ ] Envio chegando no WhatsApp (mensagem de teste recebida)
