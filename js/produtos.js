/* ========== CONFIGURAÇÃO ========== */
const WHATSAPP = "5516991963240"; // troque pelo número da loja (DDI + DDD + número)

/* Atalho para as fotos: coloque 5 imagens em img/produtos/CODIGO/1.jpg ... 5.jpg
   e use  images: fotos("LST-001")  dentro do produto. Sem "images", aparecem as ilustrações de exemplo. */
const fotos = (codigo, qtd = 5) => Array.from({length: qtd}, (_, i) => `img/produtos/${codigo}/${i + 1}.jpg`);

/* Para usar suas fotos, substitua cada item de "images" por um caminho,
   ex.: "img/LST-001-1.jpg". Enquanto isso, a página mostra ilustrações de exemplo. */
const PRODUCTS = [
  {code:"LST-001",name:"Lustre Cascata",cat:"Lustres",kind:"chandelier", images: fotos("LST-001", 1),
   desc:"Lustre de múltiplos braços com acabamento metálico escuro e lâmpadas em cascata. Perfeito para salas de estar e halls de pé-direito alto.",
   specs:{Material:"Metal e vidro",Diâmetro:"80 cm",Lâmpadas:"8x E14"}},
  {code:"LST-002",name:"Lustre Aro Moderno",cat:"Lustres",kind:"ring",images: fotos("LST-002", 1),
   desc:"Estrutura circular minimalista com iluminação em LED integrada, luz difusa e elegante para salas de jantar.",
   specs:{Material:"Alumínio",Diâmetro:"60 cm",Potência:"36 W LED"}},
  {code:"LST-003",name:"Lustre Aro Moderno",cat:"Lustres",kind:"ring",images: fotos("LST-003", 1),
   desc:"Estrutura circular minimalista com iluminação em LED integrada, luz difusa e elegante para salas de jantar.",
   specs:{Material:"Alumínio",Diâmetro:"60 cm",Potência:"36 W LED"}},
  {code:"LST-004",name:"Lustre Aro Moderno",cat:"Lustres",kind:"ring",images: fotos("LST-004", 1),
   desc:"Estrutura circular minimalista com iluminação em LED integrada, luz difusa e elegante para salas de jantar.",
   specs:{Material:"Alumínio",Diâmetro:"60 cm",Potência:"36 W LED"}},
  {code:"PEN-101",name:"Pendente Cúpula",cat:"Pendentes",kind:"pendant",images: fotos("PEN-101", 1),
   desc:"Pendente em formato de cúpula com interior que realça o calor da luz. Ideal sobre bancadas, mesas e balcões.",
   specs:{Material:"Metal pintado",Altura:"35 cm",Lâmpada:"1x E27"}},
  {code:"PEN-102",name:"Pendente Trio",cat:"Pendentes",kind:"pendant",images: fotos("PEN-102", 1),
   desc:"Conjunto de três cúpulas em alturas diferentes, cria um ponto focal marcante em ilhas de cozinha.",
   specs:{Material:"Metal e cabo têxtil",Altura:"Regulável",Lâmpadas:"3x E27"}},
  {code:"PEN-103",name:"Pendente Trio",cat:"Pendentes",kind:"pendant",images: fotos("PEN-103", 1),
   desc:"Conjunto de três cúpulas em alturas diferentes, cria um ponto focal marcante em ilhas de cozinha.",
   specs:{Material:"Metal e cabo têxtil",Altura:"Regulável",Lâmpadas:"3x E27"}},
  {code:"PEN-104",name:"Pendente Trio",cat:"Pendentes",kind:"pendant",images: fotos("PEN-104", 1),
   desc:"Conjunto de três cúpulas em alturas diferentes, cria um ponto focal marcante em ilhas de cozinha.",
   specs:{Material:"Metal e cabo têxtil",Altura:"Regulável",Lâmpadas:"3x E27"}},
  {code:"ARA-201",name:"Arandela Meia-Lua",cat:"Arandelas",kind:"wall",images: fotos("ARA-201", 1),
   desc:"Arandela de parede com luz direcionada para cima e para baixo, valoriza texturas e corredores.",
   specs:{Material:"Alumínio",Largura:"25 cm",Potência:"12 W LED"}},
   {code:"ARA-202",name:"Arandela Meia-Lua",cat:"Arandelas",kind:"wall",images: fotos("ARA-202", 1),
   desc:"Arandela de parede com luz direcionada para cima e para baixo, valoriza texturas e corredores.",
   specs:{Material:"Alumínio",Largura:"25 cm",Potência:"12 W LED"}},
   {code:"ARA-203",name:"Arandela Meia-Lua",cat:"Arandelas",kind:"wall",images: fotos("ARA-203", 1),
   desc:"Arandela de parede com luz direcionada para cima e para baixo, valoriza texturas e corredores.",
   specs:{Material:"Alumínio",Largura:"25 cm",Potência:"12 W LED"}},
   {code:"ARA-204",name:"Arandela Meia-Lua",cat:"Arandelas",kind:"wall",images: fotos("ARA-204", 1),
   desc:"Arandela de parede com luz direcionada para cima e para baixo, valoriza texturas e corredores.",
   specs:{Material:"Alumínio",Largura:"25 cm",Potência:"12 W LED"}},
  {code:"LUM-301",name:"Luminária de Piso Arco",cat:"Mesa e piso",kind:"floor",images: fotos("LUM-301", 1),
   desc:"Luminária de piso com haste elegante e cúpula ampla, ótima para cantos de leitura.",
   specs:{Material:"Aço e tecido",Altura:"1,70 m",Lâmpada:"1x E27"}},
  {code:"LUM-302",name:"Abajur Essencial",cat:"Mesa e piso",kind:"table",images: fotos("LUM-302", 1),
   desc:"Abajur compacto de base sólida e cúpula leve, traz uma luz aconchegante para mesas de cabeceira.",
   specs:{Material:"Cerâmica e linho",Altura:"45 cm",Lâmpada:"1x E27"}},
  {code:"LUM-303",name:"Abajur Essencial",cat:"Mesa e piso",kind:"table",images: fotos("LUM-303", 1),
   desc:"Abajur compacto de base sólida e cúpula leve, traz uma luz aconchegante para mesas de cabeceira.",
   specs:{Material:"Cerâmica e linho",Altura:"45 cm",Lâmpada:"1x E27"}},
   {code:"LUM-304",name:"Abajur Essencial",cat:"Mesa e piso",kind:"table",images: fotos("LUM-304", 1),
   desc:"Abajur compacto de base sólida e cúpula leve, traz uma luz aconchegante para mesas de cabeceira.",
   specs:{Material:"Cerâmica e linho",Altura:"45 cm",Lâmpada:"1x E27"}}
];


