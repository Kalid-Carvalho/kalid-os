# Skill: /seguranca-site

Audita a segurança de qualquer site no VPS GROVW usando três ferramentas rodando diretamente no servidor: **Lynis** (sistema), **testssl.sh** (SSL/TLS) e **Nikto** (web).

---

## Como invocar

```
/seguranca-site [dominio]
```

Exemplos:
- `/seguranca-site grovw.com.br` — auditoria completa: sistema + SSL + web
- `/seguranca-site kalidcarvalho.com` — auditoria completa para outro domínio
- `/seguranca-site` — só auditoria do sistema (Lynis), sem domínio específico

---

## VPS

```
IP:      191.101.234.242
USER:    root
KEY:     /c/Users/kalid/.ssh/grovw_vps
SSH_OPTS: -i /c/Users/kalid/.ssh/grovw_vps -o StrictHostKeyChecking=no
VPS:     root@191.101.234.242
```

---

## Fluxo de execução

### Passo 1 — Verificar e instalar ferramentas (só instala se ausente)

```bash
ssh $SSH_OPTS $VPS "
  # Lynis
  if ! command -v lynis &>/dev/null; then
    apt-get install -y lynis
  fi

  # Nikto
  if ! command -v nikto &>/dev/null; then
    apt-get install -y nikto
  fi

  # testssl.sh
  if [ ! -f /opt/testssl.sh/testssl.sh ]; then
    apt-get install -y git dnsutils
    git clone --depth 1 https://github.com/drwetter/testssl.sh.git /opt/testssl.sh
  fi
"
```

### Passo 2 — Lynis: auditoria do sistema

Sempre roda, independente de domínio.

```bash
ssh $SSH_OPTS $VPS "lynis audit system --quick --no-colors 2>&1 | grep -E '^\[WARNING\]|^\[SUGGESTION\]|Hardening index|Tests performed|Plugins enabled|Warning:|Suggestion:' | head -80"
```

Extrair e apresentar:
- Hardening index (score geral)
- Warnings (problemas reais, prioridade alta)
- Suggestions (melhorias recomendadas)

### Passo 3 — testssl.sh: auditoria SSL/TLS (só se domínio fornecido)

```bash
ssh $SSH_OPTS $VPS "/opt/testssl.sh/testssl.sh --severity MEDIUM --quiet --color 0 $DOMINIO 2>&1 | head -120"
```

Extrair e apresentar:
- Protocolos habilitados (TLS 1.0/1.1 são problemas)
- Cipher suites fracas
- Vulnerabilidades conhecidas (Heartbleed, POODLE, BEAST, ROBOT, etc.)
- Validade e configuração do certificado

### Passo 4 — Nikto: auditoria web (só se domínio fornecido)

```bash
ssh $SSH_OPTS $VPS "nikto -h https://$DOMINIO -maxtime 180 -nointeractive 2>&1 | grep -v '^-' | head -80"
```

Extrair e apresentar:
- Headers de segurança ausentes
- Arquivos/diretórios expostos
- Software desatualizado
- Configurações incorretas

---

## Output esperado

Apresentar os resultados em três blocos organizados:

```
## Lynis — Sistema
Hardening index: XX/100
Warnings (N): ...
Suggestions (N): ...

## testssl.sh — SSL/TLS: dominio.com.br
Protocolo: TLS 1.3 ✓ / TLS 1.0 ✗ (desabilitar)
Certificado: válido até DD/MM/AAAA
Vulnerabilidades: ...

## Nikto — Web: dominio.com.br
Headers ausentes: X-Frame-Options, X-Content-Type-Options, ...
Arquivos expostos: ...
```

Finalizar com **Ações recomendadas** priorizadas por severidade (CRÍTICO → ALTO → MÉDIO).

---

## Correções comuns após auditoria

### Headers Nginx ausentes
Se Nikto ou Lynis apontar headers faltando, adicionar no bloco `server {}` do Nginx:

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

Config Nginx do GROVW: `/etc/nginx/sites-available/grovw`
Config Nginx do Kalid: `/etc/nginx/sites-available/kalid`

Após editar: `nginx -t && systemctl reload nginx`

### Desabilitar TLS 1.0/1.1 no Nginx
```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
```

### SSH hardening (se Lynis reclamar)
```bash
# Desabilitar login por senha
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd
```

---

## Notas

- Lynis roda no próprio servidor — detecta problemas internos que scanners externos não veem
- testssl.sh e Nikto são externos ao servidor mas rodam dentro do VPS para evitar latência
- Nunca rodar Nikto contra sites de terceiros sem autorização
- Se o scan demorar mais de 3 minutos, pode interromper — o que já foi coletado é suficiente para análise