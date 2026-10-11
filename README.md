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

As fotografias externas (Unsplash) são apenas ilustrativas, e não fotos da empresa. Substitua as URLs `images.unsplash.com` por fotos oficiais autorizadas nas seções de `css/style.css` e nas imagens da galeria em `index.html`. Os SVGs de reserva são locais.

## Revisão de layout

A base visual foi construída para telas pequenas e expandida para tablet e desktop. Foram avaliadas larguras de 320, 360, 390, 430, 768, 1024 e 1440 px, sem rolagem horizontal do documento. Testes automatizados do menu, da galeria, da logo e do botão de rota passaram nas larguras 320, 390, 768, 1024 e 1440 px.


## Cardápio interativo (11/10/2026)

Cardápio integrado a partir de https://estanciadaestacao.my.canva.site/ . Dados editáveis em `index.html`, CSS em `css/style.css` e filtros/busca em `js/main.js`. Os preços das seções comuns foram transcritos; o cardápio-fonte apresenta **duas tabelas com valores conflitantes** para Brisket & Mac’n Cheese (98 e 139), Pork Ribs (98 e 99), Bandeja Texas (190 e 239) e Linguiça Defumada (65 e 75). Essas quatro linhas foram intencionalmente rotuladas “CONSULTE” até validação com a empresa. Pedidos presenciais diretamente no caixa; **sem carrinho ou checkout**.

Após obter preços oficiais atualizados, substitua os quatro rótulos na seção `#cardapio` por preços definitivos.