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
const convertermasc = arrayExercicio.map( arrayExercicio => arrayExercicio[0].toUpperCase()+arrayExercicio.slice(1));
console.log(convertermasc);
