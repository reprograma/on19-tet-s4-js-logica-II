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
const arrayExercicio2 = [...arrayExercicio];
arrayExercicio2.push("pitaya");
console.log(arrayExercicio2);

// remova o último item da array usando pop
const arrayExercicio3 = [...arrayExercicio];
arrayExercicio3.pop();
console.log(arrayExercicio3);

// adicione uma fruta ao início da array usando unshift
const arrayExercicio4 = [...arrayExercicio];
arrayExercicio4.unshift("pitaya");
console.log(arrayExercicio4);

// remova o primeiro item da array usando shift
const arrayExercicio5 = [...arrayExercicio];
arrayExercicio5.shift();
console.log(arrayExercicio5);

// a array resultante deverá ser igual a inicial
console.log(arrayExercicio);