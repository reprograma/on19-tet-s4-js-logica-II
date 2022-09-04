const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// adicione no array uma fruta usando push
const adicionaFim = arrayExercicio.push('morango')
console.log(arrayExercicio)

// remova o último item da array usando pop
const removeFim = arrayExercicio.pop()
console.log(arrayExercicio)

// adicione uma fruta ao início da array usando unshift
const adicionaInicio = arrayExercicio.unshift('morango')
console.log(arrayExercicio)

// remova o primeiro item da array usando shift
const removeInicio = arrayExercicio.shift()
console.log(arrayExercicio)
// a array resultante deverá ser igual a inicial
