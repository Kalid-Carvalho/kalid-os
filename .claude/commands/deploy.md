---
name: deploy
description: >
  Faz deploy de sites para o VPS GROVW (191.101.234.242) via deploy.sh.
  Use quando o usuário disser "sobe o site", "atualiza o grovw", "deploy",
  "publica no VPS", "atualiza o kalid", ou após editar qualquer site local.
---

# /deploy — Deploy para VPS GROVW

## O que faz

Sobe arquivos locais para o VPS Hostinger via SCP usando o `deploy.sh` do OS.
Roda no Git Bash.

---

## Targets disponíveis

| Target | O que sobe | Destino no VPS |
|---|---|---|
| `grovw` | site-grovw (index.html + assets/) | `/var/www/grovw/` |
| `v2` | index-v2.html | `/var/www/grovw/v2/index.html` |
| `kalid` | kalidcarvalho-links (index.html + foto.png) | `/var/www/kalid/links/` |
| `links` | links-grovw/index.html | `/var/www/grovw/links/index.html` |
| `promote-v2` | Promove v2 para produção | `/var/www/grovw/index.html` |
| `all` | Sobe tudo | todos acima |

---

## Como rodar

No Git Bash, na raiz do OS:

```bash
bash deploy.sh [target]
```

Exemplos:
```bash
bash deploy.sh grovw        # sobe site principal
bash deploy.sh kalid        # sobe página de links kalid
bash deploy.sh all          # sobe tudo
bash deploy.sh promote-v2   # coloca v2 como produção
```

---

## VPS

- **IP:** 191.101.234.242
- **Chave SSH:** `C:\Users\kalid\.ssh\grovw_vps`
- **Acesso direto:** `ssh -i C:\Users\kalid\.ssh\grovw_vps root@191.101.234.242`
- **OS:** Ubuntu 24.04 LTS — Nginx + Certbot (SSL automático)

---

## Arquivos locais

| Target | Pasta local |
|---|---|
| `grovw` | `projetos/Grovw - Sites & Performance/site-grovw/` |
| `v2` | `projetos/Grovw - Sites & Performance/site-grovw/index-v2.html` |
| `links` | `projetos/Grovw - Sites & Performance/links-grovw/` |
| `kalid` | `projetos/kalidcarvalho-links/` |

---

## Adicionar novo site de cliente

1. No VPS, criar pasta e config Nginx (usar `/vps-cliente` pra guiar)
2. No `deploy.sh`, adicionar nova função:

```bash
deploy_[SLUG]() {
  echo "→ Subindo [NOME]..."
  scp $SSH_OPTS -r "[PASTA_LOCAL]/"* $VPS:/var/www/[SLUG]/
  echo "✓ [DOMINIO] atualizado"
}
```

3. Adicionar no `case "$1"`:
```bash
[SLUG]) deploy_[SLUG] ;;
```

---

## Troubleshooting

**Permission denied (publickey):**
Verificar se a chave existe em `C:\Users\kalid\.ssh\grovw_vps` e se está autorizada no VPS.

**nginx: configuration file test failed:**
```bash
ssh -i ~/.ssh/grovw_vps root@191.101.234.242 "nginx -t"
```
Ver o erro e corrigir o arquivo de config.

**Site não atualiza no browser:**
Forçar hard refresh (`Ctrl+Shift+R`) ou limpar cache do Nginx:
```bash
ssh -i ~/.ssh/grovw_vps root@191.101.234.242 "systemctl reload nginx"
```

**SSL vencido:**
```bash
ssh -i ~/.ssh/grovw_vps root@191.101.234.242 "certbot renew"
```
