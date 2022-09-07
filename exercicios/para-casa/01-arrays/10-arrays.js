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


let substituidoPorSplice = arrayExercicio.splice(2, 1, "cenoura",) // na posicção 2, remova 1 item e substitua pelo que está nas aspas
console.log(substituidoPorSplice)
console.log(arrayExercicio)



//usando splice, substitua figo por cebola

let substituidoPorSplice2 = arrayExercicio.splice(4, 1, "cebola")
console.log(substituidoPorSplice2)
console.log(arrayExercicio)



//usando splice, remova abacaxi


let substituidoPorSplice3 = arrayExercicio.splice(5, 1)
console.log(substituidoPorSplice3)
console.log(arrayExercicio)
