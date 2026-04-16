---
name: thumbnail-youtube
description: Cria thumbnails para YouTube em HTML 1280x720, renderiza em PNG via Playwright. Aplica as regras de thumbnail de alto CTR (texto legível em miniatura, contraste alto, elemento visual dominante). Canal @kalidcarvalho.
type: skill
---

# Skill: Thumbnail YouTube

## Quando usar
Quando o usuário pedir pra criar uma thumbnail de vídeo, gerar variações de thumbnail, ou após finalizar um roteiro com `/roteiro-youtube`.

---

## Dependências
- `marca/design-guide.md` — cores e fontes da marca
- `_contexto/preferencias.md` — tom e posicionamento

---

## Input

O usuário fornece (qualquer combinação):
- **Título ou tema do vídeo**
- **Texto principal da thumbnail** (max 4 palavras — se não informar, sugerir)
- **Conceito visual** (ex: "foto minha apontando pra tela", "antes e depois", "número grande em destaque")
- **Foto** (opcional — se não tiver, criar versão só com elementos gráficos)

Se o usuário não informar o texto, propor 3 opções antes de continuar:
> "Qual desses textos pra thumbnail? (max 4 palavras cada)
> 1. [opção 1]
> 2. [opção 2]
> 3. [opção 3]"

---

## Regras de thumbnail de alto CTR

Aplicar obrigatoriamente:

**Texto:**
- Máximo 4 palavras — precisa ser legível com a thumbnail em 300px de largura
- Fonte grande, bold, com contraste extremo (branco com sombra escura, ou amarelo/limão em fundo escuro)
- Nunca repetir exatamente o título do vídeo — a thumbnail completa o título, não o duplica

**Visual:**
- Elemento dominante ocupa pelo menos 50% da área (rosto, número grande, tela com resultado)
- Se tiver foto do apresentador: expressão clara (surpresa, determinação, apontando) — sem expressão neutra
- Fundo limpo ou com gradiente — sem poluição visual
- Seta ou destaque visual direcionando o olhar pro texto ou pro elemento principal (opcional mas recomendado)

**Contraste e cor:**
- Usar a paleta Bold Human: fundo escuro #0D1526, destaque #1A56DB ou amarelo/branco para o texto
- Testar mentalmente: se imprimir em preto e branco, ainda dá pra ler?

**Formato:** 1280x720px, proporção 16:9

---

## Referências visuais por creator

Usar como modelo ao definir layout e estilo. Cada creator tem um padrão que funciona — adaptar pro contexto do vídeo, não copiar.

| Creator | Estilo de thumbnail | O que funciona |
|---|---|---|
| **Jack Roberts** (@Itssssss_Jack) | Fundo escuro sólido, rosto com expressão forte (surpresa ou determinação), texto amarelo/branco bold, seta ou destaque no elemento principal | Contraste extremo + clareza imediata do benefício |
| **Nick Saraev** (@nicksaraev) | Screenshot do resultado em destaque + texto sobreposto simples, paleta escura, sem poluição visual | Mostrar o "output" antes de qualquer explicação |
| **Cole Medin** (@ColeMedin) | Rosto + tela com código ou interface, texto curto e direto, cores frias (azul/cinza escuro) | Credibilidade técnica visual — parece que vai ensinar algo real |
| **Liam Ottley** (@LiamOttley) | Rosto grande ocupando metade, expressão de revelação, texto de impacto na outra metade, fundo com gradiente escuro | Presença do apresentador como elemento de confiança |
| **Greg Isenberg** (@gregisenberg) | Mais minimalista, texto como elemento principal, poucos elementos, tipografia grande | Funciona bem para ideias e opiniões — menos "tutorial", mais "ponto de vista" |
| **Filipe Deschamps** | Rosto expressivo + texto em português claro, cores vibrantes, design mais acessível | Expressão amplificada + texto que qualquer um entende sem contexto |

**Padrão geral dos melhores canais de IA/tech:**
- Fundo escuro predomina (passa autoridade técnica)
- Rosto presente na maioria (cria conexão e confiança)
- Texto máximo 4 palavras, sempre em destaque
- Seta ou elemento de direcionamento visual é comum
- Nenhum usa muito texto — a imagem comunica, o texto confirma

---

## Workflow

### Passo 1 — Definir o conceito

Se o usuário já trouxe um conceito (do roteiro ou direto), usar como base.

Se não, apresentar 3 layouts-tipo para escolher:

**Layout A — Rosto + Texto**
Foto do apresentador ocupando metade esquerda. Texto grande na direita. Ideal para vídeos de opinião ou revelação.

**Layout B — Resultado em tela + Texto**
Screenshot da ferramenta/resultado em destaque. Texto sobreposto no topo ou rodapé. Ideal para tutoriais e builds.

**Layout C — Número/Destaque central**
Número grande ou palavra de impacto centralizada. Apresentador em segundo plano ou canto. Ideal para listas e comparativos.

Perguntar: "Qual layout base? (A, B ou C)"

---

### Passo 2 — Gerar o HTML

Criar `thumbnail.html` com:
- Dimensões: 1280x720px fixo, overflow hidden
- Inline CSS, Google Fonts como única dependência externa
- Espaço reservado para foto (se o usuário tiver foto, indicar onde colocar o arquivo)
- Todos os elementos de texto e gráficos embutidos no HTML

Se o usuário não tiver foto, criar versão com placeholder visual (gradiente, ícone, ou elemento gráfico no lugar).

---

### Passo 3 — Renderizar em PNG

```bash
npx playwright screenshot --viewport-size=1280,720 "file:///caminho/absoluto/thumbnail.html" "thumbnail.png"
```

Mostrar o PNG renderizado. Perguntar:
> "Quer ajustar alguma coisa? (texto, cor, layout, tamanho de fonte)"

Se sim, editar o HTML e re-renderizar.

---

### Passo 4 — Variação (opcional)

Após aprovação, perguntar:
> "Quer uma variação pra teste A/B? (mesmo layout, texto ou cor diferente)"

Se sim, gerar `thumbnail-v2.html` e `thumbnail-v2.png`.

---

## Output

Salvar em:
```
conteudo/youtube/[pasta-do-video]/
  thumbnail.html
  thumbnail.png
  thumbnail-v2.html     ← se variação solicitada
  thumbnail-v2.png
```

Se não houver pasta de vídeo criada ainda:
```
conteudo/youtube/thumbs/AAAA-MM-DD-tema/
  thumbnail.html
  thumbnail.png
```

---

## Regras

- Nunca gerar thumbnail com mais de 4 palavras de texto principal
- Sempre renderizar e mostrar antes de considerar pronto
- Se a fonte ficar ilegível em tamanho pequeno, aumentar e re-renderizar
- Sem emojis no texto da thumbnail
- A thumbnail deve funcionar sem saber o título do vídeo — ela precisa comunicar sozinha
