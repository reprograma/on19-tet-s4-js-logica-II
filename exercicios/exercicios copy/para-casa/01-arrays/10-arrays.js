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
let substituidoPorSplice = arrayExercicio.splice(2, 1, "cenoura",) 
console.log(arrayExercicio)

//usando splice, substitua figo por cebola
let substituidoPorSplice2 = arrayExercicio.splice(4, 1, "cebola",) 
console.log(arrayExercicio)


//usando splice, remova abacaxi
let substituidoPorSplice3 = arrayExercicio.splice(5, 1) 
console.log(arrayExercicio)
