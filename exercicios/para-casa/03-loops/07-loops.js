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

const numerar = (fruta,index) => {
  const mapear = `${index + 1 } - ${fruta}`;
  return mapear;
   
}
const loucura =arrayExercicio.map(numerar);

console.log(loucura);