---
name: relatorio-meta-ads
description: Fluxo semanal de envio de relatórios Meta Ads via Looker Studio. Gerencia o registro de clientes, confirma atualização dos dados e gera mensagem de envio por WhatsApp.
type: skill
---

# Skill: Relatório Meta Ads

## Quando usar
Quando o usuário pedir pra mandar os relatórios da semana, verificar os relatórios dos clientes, ou adicionar um cliente novo ao registro.

---

## Registro de clientes

O registro fica em `clientes/relatorios-meta-ads.csv`:

```
cliente;tipo_campanha;link_looker_studio;whatsapp_cliente;status
```

- `tipo_campanha`: visitas_perfil / leads / whatsapp / misto
- `status`: ativo / pausado

Se o arquivo não existir, criar com o cabeçalho e perguntar quais clientes adicionar.

---

## Fluxo semanal

### 1. Ler o registro
Abrir `clientes/relatorios-meta-ads.csv` e listar os clientes com status `ativo`.

### 2. Confirmar atualização
Para cada cliente, perguntar:

> "Os dados do [cliente] já atualizaram no Looker Studio?"

Se sim, gerar a mensagem de envio.
Se não, marcar pra revisitar e seguir pro próximo.

### 3. Gerar mensagem de envio

Usar o template abaixo, adaptando pelo tipo de campanha:

---

**Para campanha de visitas ao perfil:**
```
Olá [nome]! Segue o relatório desta semana:
[link]

Destaques: alcance, impressões e visitas ao perfil.
Qualquer dúvida é só chamar.
```

**Para campanha de leads:**
```
Olá [nome]! Segue o relatório desta semana:
[link]

Destaques: leads gerados, CPL e taxa de conversão.
Qualquer dúvida é só chamar.
```

**Para campanha de WhatsApp:**
```
Olá [nome]! Segue o relatório desta semana:
[link]

Destaques: cliques no WhatsApp, CPM e CTR.
Qualquer dúvida é só chamar.
```

**Para campanha mista:**
```
Olá [nome]! Segue o relatório desta semana:
[link]

Destaques: resultados gerais da semana com as métricas principais.
Qualquer dúvida é só chamar.
```

---

### 4. Apresentar resultado

Mostrar todas as mensagens geradas de uma vez, organizadas por cliente.

Perguntar: "Quer ajustar alguma mensagem antes de mandar?"

---

## Adicionar cliente novo

Quando o usuário pedir pra cadastrar um cliente novo:

1. Perguntar: nome do cliente, tipo de campanha, link do Looker Studio, WhatsApp do cliente
2. Adicionar a linha em `clientes/relatorios-meta-ads.csv`
3. Confirmar: "Cliente [nome] cadastrado. Quando o setup do Looker Studio estiver pronto, o link já fica registrado aqui."

Se o cliente ainda não tiver link (Looker Studio em setup), deixar o campo em branco e registrar assim mesmo.

---

## Pausar ou reativar cliente

Quando o usuário disser que um cliente pausou ou encerrou:
- Atualizar o campo `status` pra `pausado`
- Não remover a linha — histórico fica preservado

---

## Observações

- Se o usuário não informar o tipo de campanha, perguntar antes de gerar a mensagem
- Não inventar métricas — a mensagem é só pra entregar o link com contexto mínimo
- Para configurar o Looker Studio pela primeira vez, usar o guia em `setup-looker-studio.md` na mesma pasta desta skill
