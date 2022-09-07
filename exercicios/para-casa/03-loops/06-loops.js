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

const mapeandoArray = arrayExercicio
  .map((palavra) => palavra[0].toLocaleUpperCase() + palavra.slice(1));

  console.log(mapeandoArray)