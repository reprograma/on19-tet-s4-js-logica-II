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
arrayExercicio.push("melancia");
console.log("Push: ", arrayExercicio)

// remova o último item da array usando pop
arrayExercicio.pop();
console.log("Pop: ", arrayExercicio)

// adicione uma fruta ao início da array usando unshift
arrayExercicio.unshift("abacate");
console.log("Unshift: ", arrayExercicio)

// remova o primeiro item da array usando shift
arrayExercicio.shift("abacate");
console.log("Shift: ", arrayExercicio)

// a array resultante deverá ser igual a inicial
