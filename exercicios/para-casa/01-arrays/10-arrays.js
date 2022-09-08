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
const resultado = arrayExercicio.splice(2, 1, "cenoura");
console.log("Retirado: ", resultado);
console.log("Lista atulizada: ", arrayExercicio);

//usando splice, substitua figo por cebola
const resultado2 = arrayExercicio.splice(4, 1, "cebola");
console.log("Retirado: ", resultado2);
console.log("Lista atulizada: ", arrayExercicio);

//usando splice, remova abacaxi
const resultado3 = arrayExercicio.splice(5, 1,);
console.log("Retirado: ", resultado3);
console.log("Lista atulizada: ", arrayExercicio);