#!/bin/bash
# ─────────────────────────────────────────────
# GROVW — Deploy Script
# Uso: bash deploy.sh [target]
# Targets: grovw | kalid | v2 | links
# ─────────────────────────────────────────────

VPS="root@191.101.234.242"
KEY="$HOME/.ssh/grovw_vps"
BASE="$HOME/Downloads/KalidCarvalho-os/projetos/Grovw - Sites & Performance"

SSH_OPTS="-i $KEY -o StrictHostKeyChecking=no"

deploy_grovw() {
  echo "→ Subindo site-grovw (site principal)..."
  scp $SSH_OPTS -r "$BASE/site-grovw/assets" $VPS:/var/www/grovw/
  scp $SSH_OPTS "$BASE/site-grovw/index.html" $VPS:/var/www/grovw/index.html
  echo "✓ grovw.com.br atualizado"
}

deploy_v2() {
  echo "→ Subindo index-v2 para /v2..."
  scp $SSH_OPTS "$BASE/site-grovw/index-v2.html" $VPS:/var/www/grovw/v2/index.html
  echo "✓ grovw.com.br/v2 atualizado"
}

deploy_kalid() {
  echo "→ Subindo kalidcarvalho.com..."
  scp $SSH_OPTS "$HOME/Downloads/KalidCarvalho-os/projetos/kalidcarvalho-links/index.html" $VPS:/var/www/kalid/links/index.html
  scp $SSH_OPTS "$HOME/Downloads/KalidCarvalho-os/projetos/kalidcarvalho-links/foto.png" $VPS:/var/www/kalid/links/foto.png
  echo "✓ kalidcarvalho.com/links atualizado"
}

deploy_links() {
  echo "→ Subindo página de links da GROVW..."
  scp $SSH_OPTS "$BASE/links-grovw/index.html" $VPS:/var/www/grovw/links/index.html
  echo "✓ grovw.com.br/links atualizado"
}

case "$1" in
  grovw)  deploy_grovw ;;
  v2)     deploy_v2 ;;
  kalid)  deploy_kalid ;;
  links)  deploy_links ;;
  all)
    deploy_grovw
    deploy_v2
    deploy_kalid
    deploy_links
    ;;
  *)
    echo "Uso: bash deploy.sh [target]"
    echo ""
    echo "Targets disponíveis:"
    echo "  grovw  → sobe site principal grovw.com.br"
    echo "  v2     → sobe index-v2 para grovw.com.br/v2"
    echo "  kalid  → sobe kalidcarvalho.com/links"
    echo "  links  → sobe grovw.com.br/links"
    echo "  all    → sobe tudo"
    ;;
esac
