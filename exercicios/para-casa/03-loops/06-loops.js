// usando map, converta todas os itens da array para primeira letra maiúscula
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


const newArray = arrayExercicio.map((item) => (item[0].toUpperCase() + item.slice(1)));
console.log(newArray);