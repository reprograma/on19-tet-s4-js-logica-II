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
const arrayExercicio2 = [...arrayExercicio];
arrayExercicio2.splice(2, 1, "cenoura");
console.log(arrayExercicio2);


//usando splice, substitua figo por cebola
const arrayExercicio3 = [...arrayExercicio];
arrayExercicio3.splice(4, 1, "cebola");
console.log(arrayExercicio3);


//usando splice, remova abacaxi
const arrayExercicio4 = [...arrayExercicio];
arrayExercicio4.splice(5, 1);
console.log(arrayExercicio4);
