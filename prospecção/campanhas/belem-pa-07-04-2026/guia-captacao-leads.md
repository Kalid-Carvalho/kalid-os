# Guia de Captação de Leads — Escritórios de Advocacia | Belém-PA | 07/04/2026

> Objetivo: montar uma lista de 30-50 leads qualificados em Belém do Pará para rodar cold email + WhatsApp

---

## Passo 1 — Google Maps (fonte principal)

Abrir o Google Maps e buscar cada uma das queries abaixo. Para cada resultado:
- Anotar nome do escritório
- Anotar especialidade (aparece na categoria do Maps)
- Copiar o site (se tiver)
- Copiar o telefone (para buscar WhatsApp depois)

### Queries para usar no Maps

```
advocacia trabalhista Belém PA
advogado previdenciário Belém PA
advogado de família Belém PA
escritório de advocacia Belém PA
advogado cível Belém PA
advogado consumidor Belém PA
advogado empresarial Belém PA
advogado imobiliário Belém PA
advogado criminal Belém PA
advogado bancário Belém PA
```

**Dica:** Arrastar o mapa para diferentes bairros (Batista Campos, Umarizal, Marco, Nazaré, Reduto) e repetir as buscas para cobrir escritórios locais que não aparecem no centro.

---

## Passo 2 — OAB-PA (complementar)

Site: **oab-pa.org.br** > Busca de advogados

Filtrar por:
- Seccional: Belém
- Subseção: Belém
- Especialidade: (testar cada área)

Coletar: nome, OAB, telefone, email (quando disponível)

---

## Passo 3 — LinkedIn

Busca: `advogado Belém Pará` (filtro: Pessoas > Localização: Belém, Pará)

Priorizar:
- Sócios e titulares de escritórios (cargo: "Advogado(a)", "Sócio", "Fundador")
- Perfis com foto e atividade recente
- Perfis com site linkado no perfil

---

## Passo 4 — Nichos prioritários para Belém-PA

Com base no volume de busca por nicho e concorrência digital esperada:

| Nicho | Prioridade | Por que |
|-------|-----------|---------|
| Previdenciário | Alta | Alto volume de busca, público com urgência (INSS/benefícios) |
| Trabalhista | Alta | Demissão = busca imediata, baixa concorrência no Google Ads em Belém |
| Consumidor / Bancário | Alta | Volume alto de buscas, cliente já decidido a agir |
| Família / Divórcio | Média | Ticket alto por caso, busca específica |
| Imobiliário | Média | Crescimento em Belém, poucos escritórios com captação digital |
| Empresarial | Baixa | Ciclo de venda longo, prospecção mais consultiva |

---

## Passo 5 — Montar o CSV

Salvar os leads coletados no arquivo `leads-brutos.csv` com as colunas:

```
nome,sobrenome,dominio,especialidade,telefone,fonte
```

Depois rodar o `scrape-emails.js` para enriquecer com email automaticamente.

---

## Critérios de qualificação (filtros antes de enviar)

Incluir:
- Escritório com telefone ativo (WhatsApp provável)
- Com ou sem site (os sem site são candidatos à campanha "sem site")
- Especialidade com alta intenção de busca (ver tabela acima)

Excluir:
- Escritórios de grande porte com departamento de marketing (>10 advogados visíveis no site)
- Perfis sem foto ou desatualizados há mais de 2 anos
- Sem nenhuma forma de contato disponível

---

*Após coletar os leads, preencher `lista-leads.md` e rodar `scrape-emails.js`*
