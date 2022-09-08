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


const addNum = (str) => {
  return `${(arrayExercicio.indexOf(str) + 1)} - ${str}`
}
console.log(arrayExercicio.map(addNum))