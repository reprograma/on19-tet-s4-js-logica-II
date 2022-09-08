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

console.clear()

const upperCase = (str) => {
  let word = str[0].toLocaleUpperCase() + str.slice(1)
  return word
}

const mapped = arrayExercicio.map(upperCase)

console.log (mapped)