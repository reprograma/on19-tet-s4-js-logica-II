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

const numerarItens = (item, index) => {
  const itemNumerado = `${index + 1} - ${item}`;
  return itemNumerado;
}
const arrayExercicioNumerado = arrayExercicio.map(numerarItens);
console.log(arrayExercicioNumerado)