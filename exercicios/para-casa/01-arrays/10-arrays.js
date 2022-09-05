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
arrayExercicio.splice(2,1, 'cenoura')
console.log(arrayExercicio)
//usando splice, substitua figo por cebola
arrayExercicio.splice(4,1, 'cebola')
console.log(arrayExercicio)

//usando splice, remova abacaxi
arrayExercicio.splice(5,1)
console.log(arrayExercicio)