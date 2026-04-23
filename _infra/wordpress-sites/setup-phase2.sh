#!/bin/bash
set -e

echo "=== Phase 2: SSL + WordPress Install ==="

# SSL via Certbot
certbot --nginx -d sites.grovw.com.br \
  --email kalidcarvalhomkt@gmail.com \
  --agree-tos \
  --non-interactive

# Install WP-CLI if not present
if [ ! -f /usr/local/bin/wp ]; then
    echo "Installing WP-CLI..."
    curl -sO https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    mv wp-cli.phar /usr/local/bin/wp
fi

# Wait for WordPress container to be fully ready
echo "Waiting for WordPress..."
sleep 15

# Install WordPress
docker exec wp_sites wp core install \
  --url=https://sites.grovw.com.br \
  --title="GROVW Sites Portfolio" \
  --admin_user=kalid \
  --admin_password="WPAdmin2026!" \
  --admin_email=kalidcarvalhomkt@gmail.com \
  --allow-root

# Install Portuguese (Brazil)
docker exec wp_sites wp language core install pt_BR --activate --allow-root

# Convert to Multisite (subdirectory mode)
docker exec wp_sites wp core multisite-convert \
  --title="GROVW Sites Portfolio" \
  --allow-root

# Install useful plugins for landing pages
docker exec wp_sites wp plugin install elementor --activate --allow-root
docker exec wp_sites wp plugin install wordfence --allow-root

echo ""
echo "=== WordPress Multisite pronto! ==="
echo "URL:   https://sites.grovw.com.br"
echo "Admin: https://sites.grovw.com.br/wp-admin"
echo "User:  kalid"
echo "Pass:  WPAdmin2026!"
echo ""
echo "Para criar novo site: Sites > Add New no painel de rede"
