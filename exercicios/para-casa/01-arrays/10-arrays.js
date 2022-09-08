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
const substituicao = arrayExercicio.splice(2, 1, 'cenoura');
console.log("retirei: ", substituicao);
console.log("Sobrou: ", arrayExercicio);

//usando splice, substitua figo por cebola
const listaFrutas = arrayExercicio.splice(4, 1, 'cebola');
console.log("retirei: ", listaFrutas);
console.log("Sobrou: ", arrayExercicio);

//usando splice, remova abacaxi
const lista = arrayExercicio.splice(5, 1);
console.log("retirei: ", lista);
console.log("Sobrou: ", arrayExercicio);