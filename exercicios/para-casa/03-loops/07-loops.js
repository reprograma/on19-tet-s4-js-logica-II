// usando map, adicione um número sequencial para cada item, 
//ex: 1 - banana, 2 - pera 3- uva ...
console.clear();

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

const index = arrayExercicio.indexOf();

const mapped = arrayExercicio.map((item) => (`${index}` + " - " + item));
console.log(mapped);