console.clear();
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
const substitua1 = arrayExercicio.splice(2,1, "cenoura");

// console.log(substitua1) -> esse é a uva
console.log(arrayExercicio)

//usando splice, substitua figo por cebola
const substitua2 = arrayExercicio.splice(4,1, "cebola");
//console.log(substitua2) -> esse é o figo
console.log(arrayExercicio)


//usando splice, remova abacaxi
const remova = arrayExercicio.splice(5,1);
//console.log(remova) -> esse é removeu
console.log(arrayExercicio)
