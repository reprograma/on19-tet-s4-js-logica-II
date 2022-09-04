const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// inverta a ordem da array com .reverse()
const inverteArray = arrayExercicio.reverse()
console.log(inverteArray)

// coloque a array em ordem alfabética
const ordenaArray = arrayExercicio.sort()
console.log(ordenaArray)

// coloque a array em ordem alfabética decrescente z -> a

const ordenaDecrescente = (a,b) => {
  if (a > b) {
    return -1
  } 
  if (b > a) {
    return 1
  }
  return 0
}

const ordenadoDecrescente = arrayExercicio.sort(ordenaDecrescente)

console.log(ordenadoDecrescente)