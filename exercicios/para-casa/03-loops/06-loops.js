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

const mapeado = arrayExercicio
    .map((palavra) => palavra [0].toLocaleUpperCase() + palavra.slice(1))
    .join(" ");

console.log("Mapeado: " + mapeado);