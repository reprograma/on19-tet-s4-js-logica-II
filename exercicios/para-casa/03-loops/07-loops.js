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

const index = (fruit, i) => {
  const result = `${i+1} - ${fruit}`;
  return result;
}

const mapped = arrayExercicio.map(index);
console.log(mapped);
