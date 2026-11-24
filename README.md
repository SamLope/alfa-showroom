# Alfa Materiais Elétricos - Showroom Digital

Landing page estática (HTML, CSS e JavaScript) com catálogo de luminárias e lustres.

## Estrutura
- `index.html`: página principal
- `css/style.css`: estilos e paleta de cores
- `js/produtos.js`: **dados dos produtos** e número do WhatsApp (edite aqui)
- `js/app.js`: catálogo, filtros e galeria
- `img/logo.jpg`: logo da Alfa
- `img/produtos/CODIGO/1.jpg ... 5.jpg`: fotos de cada produto

## Como adicionar um produto
1. Crie a pasta `img/produtos/LST-003/` e coloque 5 fotos (1.jpg a 5.jpg).
2. Em `js/produtos.js`, adicione um item em `PRODUCTS` com `images: fotos("LST-003")`.

## Testar localmente
No VS Code, instale a extensão **Live Server** e clique em "Go Live".
