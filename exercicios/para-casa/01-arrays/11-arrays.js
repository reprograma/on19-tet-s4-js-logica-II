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

// adicione na array uma fruta usando push
arrayExercicio.push("morango")
console.log(arrayExercicio)

// remova o último item da array usando pop
arrayExercicio.pop()
console.log(arrayExercicio)

// adicione uma fruta ao início da array usando unshift
arrayExercicio.unshift("amora")
console.log(arrayExercicio)

// remova o primeiro item da array usando shift
arrayExercicio.shift()
console.log(arrayExercicio)

// a array resultante deverá ser igual a inicial
console.log(arrayExercicio)