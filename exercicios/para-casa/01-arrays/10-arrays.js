const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];


//usando splice, substitua uva por cenoura
const substituindo = arrayExercicio.splice (2, 1, "cenoura")
console.log(substituindo)
//usando splice, substitua figo por cebola
const substituindo2 = arrayExercicio.splice (4, 1, "cebola")
console.log(substituindo2)
//usando splice, remova abacaxi
const substituindo3 = arrayExercicio.splice (5, 1)
console.log(substituindo3)