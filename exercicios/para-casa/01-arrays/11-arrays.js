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

let frutaAdicionada = arrayExercicio.push("romã")
console.log(frutaAdicionada)
console.log(arrayExercicio)


// remova o último item da array usando pop

let frutaRemovida = arrayExercicio.pop()
console.log(arrayExercicio)

// adicione uma fruta ao início da array usando unshift

let frutaUnshift = arrayExercicio.unshift("carambola")
console.log(arrayExercicio)

// remova o primeiro item da array usando shift

let frutaComShift = arrayExercicio.shift()
console.log(arrayExercicio)

// a array resultante deverá ser igual a inicial

console.log(arrayExercicio)