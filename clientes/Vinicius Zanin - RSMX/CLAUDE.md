# RMSX — Vinicius Zanin

## O que é
Cliente ativo. Escopo e valor ainda a definir — briefing em preenchimento.

## Tipo
Cliente

## Escopo
A definir após briefing completo.

## Contexto
- Status: ativo, contrato pendente
- Contato: Vinicius Zanin
- Empresa: RMSX
- Dados cadastrais, valor e prazo ainda não coletados

## Pendências
- [ ] Definir escopo completo
- [ ] Coletar CPF/CNPJ e endereço
- [ ] Logo e materiais visuais
- [ ] Fechar valor e condições

## Acesso ao servidor (RSMX)

```bash
ssh -p 65002 u627285565@147.79.84.66
# senha: Rsmx!@2026*
```

Upload via Python/paramiko (sem sshpass):
- Host: `147.79.84.66`
- Porta: `65002`
- Usuário: `u627285565`
- Senha: `Rsmx!@2026*`
- Raiz do site: `domains/rsmx.com.br/public_html/`

## Site (status: no ar — site estático)
- Migrado do WordPress para site estático em 18/04/2026
- GTM instalado: `GTM-5ZTSC6BS`
- SEO atualizado: title, description, canonical, OG image real, Schema JSON-LD (Organization + FAQPage)
- Formulário conectado via API (Web3Forms)
- Servidor: `147.79.84.66:65002` → `domains/rsmx.com.br/public_html/`

## Arquivos importantes
- briefing.md — briefing do cliente
- site/ — LP estática (index.html + assets) — submodule git
- site/backup-server/ — backup das páginas `links/` e `trafego/` do servidor antigo
