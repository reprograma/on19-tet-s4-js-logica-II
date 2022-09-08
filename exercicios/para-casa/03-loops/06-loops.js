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

const letraMaiuscula = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}
console.log(arrayExercicio.map(letraMaiuscula))