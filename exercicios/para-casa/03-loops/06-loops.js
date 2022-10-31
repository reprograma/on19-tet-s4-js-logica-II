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

const arrayMap = arrayExercicio.map((item) => {
  return `${item[0].toLocaleUpperCase() + item.slice(1, item.length).toLowerCase()}`
 });
console.log(arrayMap);
