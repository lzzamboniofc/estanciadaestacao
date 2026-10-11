# Estância da Estação — site institucional

**Site demonstrativo** desenvolvido em **HTML, CSS e JavaScript puro**, sem frameworks, build ou banco de dados. Visual country/western, adaptado para desktop, tablet e celular.

## Abrir o site

Basta abrir `index.html` em um navegador com internet. Para testar em servidor local:

```bash
python -m http.server 8080
```

Acesse `http://localhost:8080`.

## Estrutura

```text
EstanciaDaEstacao/
├── index.html               # Conteúdo, SEO e metadados estruturados
├── css/style.css            # Identidade visual e responsividade
├── js/main.js               # Navegação, efeitos, galeria e utilidades
├── assets/
│   ├── logo-original.webp   # Logo enviada, recortada, com fundo preto
│   ├── logo-transparente.png# Logo enviada, com transparência
│   ├── favicon.svg          # Ícone estilizado para navegador
│   └── ilustracao-*.svg     # 6 ilustrações locais de fallback
├── robots.txt
└── README.md
```

## O que funciona

- Menu mobile acessível, com fechamento por Escape e clique nos links.
- Navegação entre seções e indicação da seção ativa.
- Animações de entrada com respeito à configuração de reduzir movimento.
- Filtros de galeria **Todos / Sabores / Atmosfera**.
- Ampliação das fotos com navegação pelas setas, teclado e gesto lateral no celular.
- FAQ expansível, cópia do endereço, barra de progresso, botões de rota no Google Maps.
- Links para Instagram e Facebook oficiais; layout de mapa incorporado.
- Metadados para buscadores e estrutura JSON-LD Restaurant.

## Informações utilizadas

- **Empresa:** Estância da Estação — Burger & BBQ, Itu/SP; logo indica "Since 2011".
- **Endereço informado no Instagram:** Rodovia Waldomiro Corrêa de Camargo, km 58, Itu/SP.
- **Horários informados no Instagram:** sexta e domingo 10h–15h; sábado e feriados 10h–16h.
- **Política de reservas:** não realizam reservas.
- **Instagram:** https://www.instagram.com/estanciadaestacao/
- **Facebook:** https://www.facebook.com/estanciadaestacao/

**Importante:** a captura do Instagram foi considerada fonte principal para horário e km da rodovia. Diretórios de terceiros variam entre *km 57,5* e *km 58*; confirme os dados antes da publicação comercial. Também confirme se o horário de feriados permanece assim. Não foi incluído WhatsApp porque não foi fornecido um contato oficial confirmado.

## Fotos — substitua antes de publicar para a empresa

As fotos culinárias e de ambiente usadas **são imagens ilustrativas externas do Unsplash**, não fotografias reais da Estância. O navegador necessita de conexão para exibir essas fotos; sem ela, ilustrações locais de fallback mantêm a aparência e a galeria acessíveis. Antes da entrega final ao negócio, obtenha imagens oficiais/autorizadas e substitua as URLs nos seguintes arquivos:

1. `css/style.css`: procure por `images.unsplash.com` nas classes `.hero-photo`, `.about-photo`, `.flavor-image--bbq`, `.flavor-image--burger`, `.flavor-image--country` e `.statement-image`.
2. `index.html`: procure por `images.unsplash.com` nos seis `<img>` da galeria e troque o `src` por `assets/nome-da-foto.jpg`.
3. Remova/ajuste os dois avisos de **imagens ilustrativas** no HTML após inserir fotografias reais.

**Fontes utilizadas:** Barlow Condensed, DM Sans e Rye, via Google Fonts. Há fontes de sistema como alternativa. A marca/logotipo é propriedade de seu titular, e está presente exclusivamente nesta proposta.

## Identidade visual

No início de `css/style.css`, altere as variáveis `--wine`, `--gold`, `--paper` e `--coal`. Se houver novos dados, atualize o HTML nas áreas *Visite-nos*, FAQ, rodapé, barra superior e o JSON-LD.

## Publicação

Pode ser hospedado diretamente no **GitHub Pages (`main` / `/root`)**, Netlify, Vercel ou qualquer hospedagem estática: o `index.html` já está na raiz. Ao publicar em domínio definitivo, atualize `og:image` com URL absoluta (https://...). Se desejar imagens funcionando offline, baixe fotos licenciadas localmente e use caminhos `assets/...`.

## Revisão antes da venda

- [ ] Trocar fotos ilustrativas por fotos reais da empresa, com autorização.
- [ ] Validar horários especiais e endereço com o responsável.
- [ ] Confirmar cardápio, informações e texto institucional.
- [ ] Caso queira contato por WhatsApp, confirmar número antes de adicionar.
- [ ] Testar mapa/rotas e compartilhamento no domínio final.
- [ ] Rever textos com a empresa para refletir a história real do negócio.