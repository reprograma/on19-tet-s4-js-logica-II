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
const remov = arrayExercicio.splice(2,1);
arrayExercicio.splice(2,0,"cenoura");

console.log(arrayExercicio);

//usando splice, substitua figo por cebola
const remov2 = arrayExercicio.splice(4,1);
arrayExercicio.splice(4,0,"cebola");

console.log(arrayExercicio);

