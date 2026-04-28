# Aprendizados — Meta Ads Ratos

Regras aprendidas durante o uso. O Claude DEVE ler este arquivo antes de criar qualquer objeto.

---

### 2026-04-03 — Sempre incluir CTA no criativo
**Regra:** Ao criar criativos (create.py creative), SEMPRE incluir call_to_action_type. Padrão: LEARN_MORE pra tráfego, SIGN_UP pra leads, SHOP_NOW pra vendas. Nunca criar criativo sem CTA.
**Contexto:** Criou carrossel sem botão de CTA. Usuário teve que corrigir manualmente.

### 2026-04-03 — Carrossel Instagram: multi_share_end_card=false
**Regra:** Em campanhas de visita ao perfil Instagram, SEMPRE usar multi_share_end_card=false e multi_share_optimized=false no criativo.
**Contexto:** Cartão "Ver mais" sem URL quebrou o anúncio em 10 posicionamentos. O end_card exige uma URL de destino que não existe em campanhas de perfil.

### 2026-04-03 — Sempre passar instagram_user_id no criativo
**Regra:** Ao criar criativos pra Instagram, SEMPRE usar --instagram-user-id com o ID da conta Instagram do cliente (do contas.yaml).
**Contexto:** Sem instagram_user_id, o ad não publica no Instagram. Erro: "Seu anúncio deve ser associado a uma conta do Instagram."

### 2026-04-28 — Audiências de vídeo view por porcentagem não são criáveis via API
**Regra:** Para audiências de engajamento de vídeo, a API só aceita `event_name: "video_completed"` (ThruPlay/95%+) no formato array `[{"event_name":"video_completed","object_id":ID}]`. Audiências de 25%/50%/75% devem ser criadas manualmente no Ads Manager.
**Contexto:** Testados todos os formatos: `video_view`, `video_watched_25`, `video_view_25_pct`, inclusions com filtro de porcentagem — todos falham com subcode 1713151 ou 1870049. Só `video_completed` é aceito.

### 2026-04-28 — THRUPLAY billing indisponível para contas novas, usar IMPRESSIONS
**Regra:** Contas de anúncio novas não podem usar `billing_event: THRUPLAY`. Usar `billing_event: IMPRESSIONS` com `optimization_goal: THRUPLAY`. A otimização ainda funciona para ThruPlay.
**Contexto:** Erro "new business accounts must follow policies for several weeks" ao tentar THRUPLAY billing.

### 2026-04-28 — ODAX obriga is_adset_budget_sharing_enabled na campanha
**Regra:** Campanhas com objetivos ODAX (OUTCOME_*) precisam do campo `is_adset_budget_sharing_enabled`. Para ABO (orçamento no ad set), passar `false`. Para CBO, passar `true`.
**Contexto:** Criação de campanha OUTCOME_AWARENESS falhava sem esse campo.

### 2026-04-28 — API bloqueia criação de anúncios sem cartão de crédito cadastrado
**Regra:** Mesmo com saldo PIX, a Meta exige cartão de crédito cadastrado na conta de anúncio para criar ads via API (error_subcode 1359188, blame_field: account_id). Só o saldo PIX não é suficiente.
**Contexto:** Conta Zanin act_1032135039976920 tem saldo PIX mas não cartão. Anúncio precisou ser criado manualmente no Ads Manager.

### 2026-04-28 — source_instagram_media_id: usar ID real, não calculado do shortcode
**Regra:** Nunca calcular/derivar o source_instagram_media_id a partir do shortcode. IDs derivados são rejeitados. Buscar o ID real via API na conta onde o post está hospedado (lendo o creative que já usa aquele post).
**Contexto:** Post "O que voce faria com 700h?" — ID derivado do shortcode DXZYhz1ifB_ foi rejeitado. ID real `18005140562855165` foi encontrado lendo o creative `833712245682169` da campanha TURBINADO no RSMX.

### 2026-04-03 — Desligar format options em carrosséis
**Regra:** Ao criar ads de carrossel, SEMPRE passar --degrees-of-freedom-spec com OPT_OUT pra carousel_to_video, image_touchups e standard_enhancements.
**Contexto:** "Blocos de coleção" e "mídia única" distorcem o carrossel sequencial. Desligar pra manter ordem dos slides.
