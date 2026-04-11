# Setup Looker Studio — Meta Ads por Cliente

Guia de configuração única. Roda uma vez por cliente novo.

---

## Pré-requisitos

- Acesso de administrador à conta de anúncios do cliente no Meta Ads Manager
- Conta Google (Gmail) do cliente ou uma conta Google sua pra hospedar o relatório
- O template do Looker Studio que você comprou

---

## Passo 1 — Duplicar o template

1. Abrir o link do template no Looker Studio
2. Clicar em **"Fazer uma cópia"** (ícone de cópia no canto superior direito)
3. Na cópia, renomear pra: `Relatório Meta Ads — [Nome do Cliente]`
4. Confirmar a cópia (os dados virão da nova fonte que vamos conectar)

---

## Passo 2 — Conectar o Meta Ads do cliente

1. Dentro da cópia, clicar em **Recurso > Gerir fontes de dados adicionadas**
2. Selecionar a fonte existente e clicar em **Editar**
3. Trocar para o conector **Meta Ads** (se não aparecer, buscar por "Facebook Ads")
4. Fazer login com a conta que tem acesso à conta de anúncios do cliente
5. Selecionar a **conta de anúncios correta** do cliente
6. Confirmar e aplicar

> Se o cliente não te deu acesso ainda: peça acesso de "Anunciante" na conta do Meta Business dele.

---

## Passo 3 — Ajustar o período e métricas

1. Verificar se o período padrão está como **"últimos 7 dias"** (ideal para relatório semanal)
2. Confirmar que as métricas exibidas fazem sentido pro tipo de campanha do cliente:
   - Visitas ao perfil: alcance, impressões, cliques no perfil
   - Leads: leads gerados, CPL, taxa de conversão
   - WhatsApp: cliques no botão, CPM, CTR
   - Misto: todas acima

3. Ajustar ou ocultar blocos que não se aplicam ao cliente

---

## Passo 4 — Configurar compartilhamento

1. Clicar em **Compartilhar** no canto superior direito
2. Configurar como **"Qualquer pessoa com o link pode visualizar"**
3. Copiar o link gerado

---

## Passo 5 — Registrar no CRM de relatórios

Rodar `/relatorio-meta-ads` e usar a opção de adicionar cliente novo com o link copiado.

---

## Observações

- O Looker Studio atualiza os dados automaticamente a cada 12h (padrão do conector Meta)
- Se os dados não atualizarem, clicar em **Atualizar dados** dentro do relatório
- Cada cliente deve ter sua própria cópia do relatório — nunca compartilhe o mesmo relatório entre clientes
- Se o cliente quiser trocar a conta Google vinculada, é necessário reconectar a fonte do zero
