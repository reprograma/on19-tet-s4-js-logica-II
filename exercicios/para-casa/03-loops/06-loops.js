// usando map, converta todas os itens da array para primeira letra maiúscula
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

const primeirasMaiusculas = arrayExercicio.map(item => 
  console.log(item[0].toUpperCase() + item.slice(1).toLowerCase()) 
)