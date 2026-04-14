#!/bin/bash
# ─────────────────────────────────────────────
# GROVW — Deploy Script
# Uso: bash deploy.sh [target]
# Targets: grovw | kalid | links
# ─────────────────────────────────────────────

VPS="root@191.101.234.242"
KEY="/c/Users/kalid/.ssh/grovw_vps"
BASE="/c/Users/kalid/Downloads/KalidCarvalho-os/projetos/Grovw - Sites & Performance"

SSH_OPTS="-i $KEY -o StrictHostKeyChecking=no"

deploy_grovw() {
  echo "→ Subindo site-grovw (site principal)..."
  scp $SSH_OPTS "$BASE/site-grovw/index.html" $VPS:/var/www/grovw/index.html
  echo "  → Subindo assets/img..."
  ssh $SSH_OPTS $VPS "mkdir -p /var/www/grovw/assets/img"
  scp $SSH_OPTS -r "$BASE/site-grovw/assets/img" $VPS:/var/www/grovw/assets/
  echo "✓ grovw.com.br atualizado"
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

deploy_diagnostico() {
  echo "→ Subindo landing page de diagnóstico..."
  scp $SSH_OPTS "$HOME/Downloads/KalidCarvalho-os/projetos/landing-advogados/index-gold.html" $VPS:/var/www/kalid/diagnostico/index.html
  ssh $SSH_OPTS $VPS "mkdir -p /var/www/kalid/diagnostico/obrigado"
  scp $SSH_OPTS "$HOME/Downloads/KalidCarvalho-os/projetos/landing-advogados/obrigado/index.html" $VPS:/var/www/kalid/diagnostico/obrigado/index.html
  echo "✓ kalidcarvalho.com/diagnostico atualizado"
}

case "$1" in
  grovw)        deploy_grovw ;;
  kalid)        deploy_kalid ;;
  links)        deploy_links ;;
  diagnostico)  deploy_diagnostico ;;
  all)
    deploy_grovw
    deploy_kalid
    deploy_links
    deploy_diagnostico
    ;;
  *)
    echo "Uso: bash deploy.sh [target]"
    echo ""
    echo "Targets disponíveis:"
    echo "  grovw        → sobe site principal grovw.com.br"
    echo "  kalid        → sobe kalidcarvalho.com/links"
    echo "  links        → sobe grovw.com.br/links"
    echo "  diagnostico  → sobe kalidcarvalho.com/diagnostico"
    echo "  all          → sobe tudo"
    ;;
esac
