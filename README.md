# Estância da Estação — Site institucional (Mobile First)

Site em HTML, CSS e JavaScript puro, sem build, preparado para o GitHub Pages.

## Publicação

No GitHub: Settings → Pages → Deploy from a branch → main → / (root).

## Estrutura

- `index.html`: conteúdo e metadados.
- `css/style.css`: design country, escrito mobile-first (breakpoints de 480, 700, 1000 e 1280 px).
- `js/main.js`: menu responsivo, seção ativa, galeria interativa, FAQ e botão de rota.
- `assets/logo-estancia.webp`: logo original enviada, otimizada para a web.
- `assets/ilustracao-*.svg`: artes de reserva para quando fotografias externas não carregarem.
- `assets/favicon.svg` e `robots.txt`: recursos auxiliares.

## Informações públicas da proposta

**Endereço:** Rodovia Waldomiro Corrêa de Camargo, km 58 — Itu/SP.
**Horários:** sexta e domingo das 10h às 15h; sábado e feriados das 10h às 16h.
**Reservas:** não são realizadas.
**Instagram:** https://www.instagram.com/estanciadaestacao/
**Facebook:** https://www.facebook.com/estanciadaestacao/

Confirme horários, endereço e conteúdo com o proprietário antes de entregar comercialmente.

## Fotografias

O projeto agora inclui fotografias reais da Estância da Estação em hero, seção de essência, sabores, bloco de destaque e galeria. Os SVGs de reserva continuam locais para servir como apoio visual. Há ainda dois vídeos enviados separadamente que podem ser integrados em uma próxima revisão, se desejar.

## Revisão de layout

A base visual foi construída para telas pequenas e expandida para tablet e desktop. Foram avaliadas larguras de 320, 360, 390, 430, 768, 1024 e 1440 px, sem rolagem horizontal do documento. Testes automatizados do menu, da galeria, da logo e do botão de rota passaram nas larguras 320, 390, 768, 1024 e 1440 px.


## Cardápio para consulta

A seção `#cardapio` apresenta somente os produtos identificados no cardápio original (https://estanciadaestacao.my.canva.site/), sem valores. Organizada por categorias selecionáveis em linhas centralizadas com quebra automática (sem rolagem horizontal), separando sobremesa e milk shakes. Os botões servem apenas para alternar categorias, e o único link externo nessa seção é **CARDÁPIO ORIGINAL →**. Não há busca, preços, carrinho, compra, reserva ou botões por produto.

Atualize os itens no `index.html` quando houver mudanças confirmadas pelo estabelecimento. Confirme sempre o conteúdo antes de apresentar a versão comercial.

## Revisão de código (11/10/2026)

- Restaurado o estado inicial dos filtros: todos os tópicos começam fechados; nenhum botão selecionado antes do clique.
- Verificados IDs, links de âncora, referências de arquivos, CSS, sintaxe JavaScript e JSON-LD.
- Corrigido espaçamento ocioso na seção do cardápio antes da seleção, em resoluções maiores.
- Endereço canonical, Open Graph e imagem do JSON-LD configurados para a URL atual do GitHub Pages. **Trocar essas URLs quando houver domínio próprio.**
- Preços seguem ocultos, com apenas um link para o cardápio original e filtros de categorias sem overflow.


## Vídeos da Estância

A seção **A Estância em movimento** (após a galeria) apresenta o Old Car Country Fest e a Bandeja Texas. Ambos usam a mesma capa, botão de play e controles nativos após o clique. O vídeo gastronômico foi otimizado em MP4 (H.264), sem áudio, para reduzir o tamanho.

- `assets/videos/bandeja-texas.mp4` — bandeja de carnes e acompanhamentos.
- `assets/videos/*-poster.webp` — imagem inicial exibida sem baixar o vídeo.

Os vídeos só carregam após interação: no festival os oito segmentos são baixados sob demanda; na Bandeja Texas o MP4 otimizado é carregado ao tocar **ASSISTIR À BANDEJA TEXAS**. A descrição breve **O ESPÍRITO DO BBQ / UMA BANDEJA, MUITAS HISTÓRIAS** foi mantida. A lista detalhada de ingredientes permanece no cardápio.
## Old Car Country Fest

O primeiro card de vídeos apresenta o Old Car Country Fest, com carros clássicos, público e música ao vivo. O vídeo completo (aproximadamente 78 segundos, formato H.264/AAC) está publicado no GitHub Pages em oito partes binárias `assets/videos/old-car-country-fest.part01` até `part08`, reconstruídas somente após o visitante selecionar **ASSISTIR AO FESTIVAL**. A capa é `assets/videos/old-car-country-fest-poster.webp`. A reprodução nunca é iniciada automaticamente no carregamento da página. O segundo vídeo da Bandeja Texas apresenta o mesmo registro enviado novamente em 12/10/2026 (arquivos de origem idênticos), aproveitando a versão previamente otimizada para não duplicar uploads.

Para manutenção futura, caso seja possível enviar o MP4 inteiro diretamente ao repositório, pode-se simplificar o carregamento substituindo os segmentos por um arquivo `old-car-country-fest.mp4` e um `<source>` convencional.
