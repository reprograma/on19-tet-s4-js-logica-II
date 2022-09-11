// usando map, adicione um número sequencial para cada item, 
//ex: 1 - banana, 2 - pera 3- uva ...
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

const ordenandoArrayMap = arrayExercicio.map((elemento, indice) => `${indice += 1} - ${elemento}`);

console.log(ordenandoArrayMap)