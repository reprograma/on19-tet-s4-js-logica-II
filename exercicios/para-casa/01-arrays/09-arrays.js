const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// inverta a ordem da array com reverse
console.log("\ninverta a ordem da array com reverse")
const invertido = arrayExercicio.reverse()
console.log(invertido)

// coloque a array em ordem alfabética
console.log("\ncoloque a array em ordem alfabética")
arrayExercicio.sort()
console.log(arrayExercicio)

// coloque a array em ordem alfabética decrescente z -> a
console.log("\ncoloque a array em ordem alfabética decrescente z -> a")
const ordemAlfabetica = arrayExercicio.sort()
const ordemDecrescente = ordemAlfabetica.reverse()
console.log(ordemDecrescente)