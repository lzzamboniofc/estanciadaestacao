# Estância da Estação — site institucional

Site demonstrativo desenvolvido em **HTML, CSS e JavaScript puro**, pronto para GitHub Pages. Identidade country/western, logo original fornecida e layout **mobile-first**.

## Abrir / publicar

Abra `index.html` localmente ou sirva esta pasta com:

```bash
python -m http.server 8080
```

Para publicar no GitHub Pages: **Settings → Pages → Deploy from a branch → main → / (root)**. Não há Node, build nem dependências de instalação.

## Estrutura

```text
/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── logo-estancia.webp       # Logo original otimizada com transparência
│   ├── favicon.svg
│   └── ilustracao-*.svg        # Artes locais de reserva para fotografias externas
├── robots.txt
└── README.md
```

## Revisão de design / mobile-first

A base do CSS foi pensada para celulares pequenos (inclusive 320 px) e expandida progressivamente nos breakpoints **480, 700, 1000 e 1280 px**, mantendo navegação responsiva, proporções, alinhamentos e respiro entre seções.

- Texto principal ajustado para evitar quebras inadequadas em telas estreitas.
- Menu mobile e elementos interativos acessíveis.
- Botão flutuante **Como chegar** exibido somente após a primeira seção, para não cobrir os CTAs do hero; é ocultado próximo ao rodapé.
- Galeria com filtros e ampliação, FAQ, indicador de seção ativa, barra de progresso e links de rota.
- Testes de layout sem rolagem horizontal em **320, 360, 390, 430, 768, 1024 e 1440 px**.
- Interações verificadas em **320, 390, 768, 1024 e 1440 px**.

## Dados da empresa

- **Estância da Estação — Meat & Beer**, Itu/SP; identidade visual indica “Since 2011”.
- **Endereço do perfil Instagram:** Rodovia Waldomiro Corrêa de Camargo, km 58, Itu/SP.
- **Funcionamento:** sexta e domingo 10h–15h; sábado e feriados 10h–16h.
- **Reservas:** não realiza.
- **Instagram:** https://www.instagram.com/estanciadaestacao/
- **Facebook:** https://www.facebook.com/estanciadaestacao/

Os horários e a quilometragem devem ser confirmados com o estabelecimento antes de entregar comercialmente; publicações ou informações especiais podem mudar.

## Fotografias e conteúdos

**As fotografias atualmente usadas são ilustrativas**, com URLs externas do Unsplash. As imagens reais e autorizadas da Estância devem substituir essas fotos na versão comercial.

- No `css/style.css`, substitua `images.unsplash.com` nas seções de hero, essência, sabores e frase central.
- No `index.html`, substitua os `src` de imagens da galeria por arquivos locais, por exemplo `assets/galeria-01.webp`.
- Depois de inserir fotos oficiais, retire os avisos que indicam imagens ilustrativas.
- Confirme informações institucionais e eventuais novidades antes de adicionar cardápio, preços, WhatsApp ou reservas.

**Observação:** as ilustrações SVG locais funcionam como imagens de apoio quando o serviço externo de fotografias não está disponível. As fontes externas usadas são Barlow Condensed, DM Sans e Rye, com alternativas do sistema.

## Checklist antes da venda

- [ ] Inserir fotografias oficiais autorizadas.
- [ ] Confirmar horário, endereço e textos institucionais.
- [ ] Revisar conteúdo com o proprietário.
- [ ] Verificar URLs de rede social e mapas na hospedagem definitiva.
- [ ] Adicionar o número oficial de contato somente após confirmação.
