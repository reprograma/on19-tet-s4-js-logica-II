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
var remove = arrayExercicio.splice(2,0,"cenoura");
console.log(arrayExercicio);

//usando splice, substitua figo por cebola
var remove1 = arrayExercicio.splice(4,0,"cebola");
console.log(arrayExercicio);

//usando splice, remova abacaxi
var remove2 = arrayExercicio.splice(5,1);
console.log(arrayExercicio);