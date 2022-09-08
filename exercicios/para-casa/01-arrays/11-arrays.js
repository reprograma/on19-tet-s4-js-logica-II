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
const adicionaFruta = arrayExercicio.push("manga")
console.log("push", arrayExercicio);
// remova o último item da array usando pop
const removeFruta = arrayExercicio.pop()
console.log(removeFruta, arrayExercicio)
// adicione uma fruta ao início da array usando unshift
const adicionaFruta2 = arrayExercicio.unshift("manga")
console.log("unshift", arrayExercicio);
// remova o primeiro item da array usando shift
const removeFruta2 = arrayExercicio.shift("manga")
console.log("shift", arrayExercicio);

// a array resultante deverá ser igual a inicial
onsole.log('\na array resultante deverá ser igual a inicial')
console.log(arrayExercicio)