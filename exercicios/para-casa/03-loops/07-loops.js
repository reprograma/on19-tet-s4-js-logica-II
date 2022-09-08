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

console.clear()

let pos = 1
const counting = (fruit) => {
  const treated = pos.toString() + '-' + fruit
  pos++
  return treated
}

const counted = arrayExercicio.map(counting)

console.log (counted)