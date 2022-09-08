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

// adicione n array uma fruta usando push
arrayExercicio.push("manga");
console.log("Push: ", arrayExercicio);
// remova o último item da array usando pop
arrayExercicio.pop();
console.log("Pop: ", arrayExercicio);
// adicione uma fruta ao início da array usando unshift
arrayExercicio.unshift("jaca");
console.log("Unshift: ", arrayExercicio);
// remova o primeiro item da array usando shift
arrayExercicio.shift();
console.log("Shift: ", arrayExercicio);
// a array resultante deverá ser igual a inicial
console.log(arrayExercicio);