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
const removido = arrayExercicio.splice(2, 1, "cenoura")
console.log(removido)
console,log(removido + "cenoura")

//usando splice, substitua figo por cebola


//usando splice, remova abacaxi
const removido3 = arrayExercicio.splice(5, 1)
console.log(removido3)