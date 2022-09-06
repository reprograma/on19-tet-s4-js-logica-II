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

const numerar = (fruta,index) => {
  const mapear = `${index + 1 } - ${fruta}`;
  return mapear;
   
}
const loucura =arrayExercicio.map(numerar)
console.log(loucura[0].toLocaleUpperCase());
