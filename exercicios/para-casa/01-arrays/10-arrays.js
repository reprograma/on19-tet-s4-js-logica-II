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
console.log("\nusando splice, substitua uva por cenoura")
const removido = arrayExercicio.splice(2, 1, "cenoura")
console.log(arrayExercicio)


//usando splice, substitua figo por cebola
console.log("\nusando splice, substitua figo por cebola")
const removido2 = arrayExercicio.splice(4, 1, "cebola")
console.log(arrayExercicio)

//usando splice, remova abacaxi
console.log("\nusando splice, remova abacaxi")
const removido3 = arrayExercicio.splice(5, 1)
console.log(arrayExercicio)