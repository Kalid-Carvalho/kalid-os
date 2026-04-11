# Kalid Carvalho — Claude Code OS

## O que é esse workspace
Workspace principal de Kalid Carvalho — opera GROVW (agência de performance digital) e a marca pessoal "Kalid Carvalho | Builder". Tudo passa por aqui: conteúdo, clientes, propostas, automações e desenvolvimento.

**Estrutura de pastas:**
- `clientes/` — pasta por cliente com briefing e proposta
- `prospecção/` — listas, sequências de email e controle de leads
- `conteudo/` — carrosséis, reels, newsletters
  - `conteudo/youtube/` — roteiros e materiais do canal @kalidcarvalho (IA | Tech | Apps)
- `projetos/` — projetos internos, apps em desenvolvimento
- `dados/` — arquivos para análise (CSV, XLSX, PDF, imagens)
- `marca/` — design guides das duas marcas
- `_contexto/` — empresa, preferências e estratégia atual
- `templates/skills/` — templates de skills prontos para personalizar
- `templates/ferramentas/catalogo.md` — APIs e ferramentas disponíveis

## Sobre o negócio
Kalid opera solo. Vende sistemas de captação digital para PMEs brasileiras pela GROVW (sites + tráfego + IA). Foco atual: fechar clientes no setor de advocacia. Paralelamente, constrói audiência como criador de conteúdo de IA no YouTube e Instagram (@kalidcarvalho) e aprende criação de apps com Claude.

## O que mais fazemos aqui
- Criação de sites de alta conversão (WordPress/Elementor e Antigravity)
- Configuração e gestão de tráfego pago (Google Ads + Meta Ads)
- Automações com IA (N8N, Typebot, Cal.com, agentes Claude)
- Conteúdo tech para @kalidcarvalho (sites, apps, IA — criador de conteúdo pessoal)
- Conteúdo jurídico para @eukalidcarvalho (marketing para advogados — canal de nicho GROVW)
- Prospecção ativa (email frio + follow-up)
- Propostas comerciais

## Clientes e contexto
Atende clientes externos. Nicho atual: advocacia (escritórios de pequeno e médio porte). Ticket médio: R$1.400–R$5.000 setup + recorrência.

## Tom de voz
Direto, assertivo, parceiro de negócios. Dados antes de adjetivos. Sem hype. Vocabulário: "sistema", "máquina de clientes", "conversão", "qualificado", "previsível".

Nunca usar: travessões, bullet points desnecessários, emojis (exceto em reels/posts motivacionais), explicações óbvias, promessas absolutas, enrolação.

Design systems por marca:
- GROVW: preto, limão, Inter
- @kalidcarvalho | Builder (Bold Human): azul escuro #1A56DB, Space Grotesk
- @eukalidcarvalho: mesmo design system Bold Human, conteúdo focado em advocacia

Ver `_contexto/preferencias.md` para lista completa.

## Ferramentas conectadas
N8N, Typebot, Cal.com, WordPress + Elementor, Antigravity, Claude Code, Cursor, Google Ads, Meta Ads, Playwright

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (se existirem e estiverem configurados):

1. `_contexto/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_contexto/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_contexto/estrategia.md` — foco atual, prioridades, o que pode esperar
4. `_contexto/persona-advogado.md` — perfil detalhado do público-alvo (dores, objeções, vocabulário)
5. `_contexto/fontes-referencia.md` — referências de alto nível por canal (@eukalidcarvalho, @kalidcarvalho, GROVW): pessoas-chave, blogs e portais que ditam o ritmo de cada mercado

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, proposta, slide, landing page), consultar `marca/design-guide.md` como referência de estilo.

Para qualquer tarefa de conteúdo (carrossel, roteiro, post, vídeo, newsletter), consultar `_contexto/fontes-referencia.md` pra calibrar o ângulo e o nível das referências por canal.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe uma skill relevante em `.claude/commands/`.
Se encontrar, seguir as instruções da skill.
Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (quem são os clientes, como funciona a empresa, serviços, mercado) → adicionar em `_contexto/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato de resposta, o que evitar, como estruturar textos) → adicionar em `_contexto/preferencias.md`
- **Sobre prioridades e foco atual** (projetos em andamento, metas do momento, prazos importantes, o que é prioridade agora) → adicionar em `_contexto/estrategia.md`
- **Regra de comportamento nessa pasta** (onde salvar arquivos, como nomear, fluxos específicos) → adicionar no próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar o que foi salvo mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na verdade o arquivo se chama X"). Só perguntar quando a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante no projeto (novo cliente, nova skill, mudança de foco, novo processo, ferramenta instalada, estrutura de pastas alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize os arquivos de memória?"

Se sim, identificar o que precisa atualizar:

- **Novo cliente, serviço, ferramenta, equipe** → `_contexto/empresa.md`
- **Mudança de prioridade ou foco** → `_contexto/estrategia.md`
- **Correção de tom ou estilo** → `_contexto/preferencias.md`
- **Nova pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Mudança visual (cores, fontes, logo)** → `marca/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só adicionar ou editar a linha relevante.

Quando NÃO perguntar: tarefas pontuais, perguntas simples, mudanças já salvas pelo bloco "Aprender com correções".

Dica: se não sabe se algo mudou, rode /atualizar pra uma varredura completa.

---

## Criação de skills

Quando o usuário pedir pra criar uma nova skill:

1. Verificar se existe um template relevante em `templates/skills/`. Se existir, usar como base e adaptar pro contexto do usuário
2. Perguntar: "Essa skill é específica pra esse projeto ou vai ser útil em qualquer projeto?"
   - Específica desse negócio → salvar em `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Útil em qualquer projeto → salvar em `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_contexto/empresa.md` e `_contexto/preferencias.md` pra calibrar o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, referências, exemplos), criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code
