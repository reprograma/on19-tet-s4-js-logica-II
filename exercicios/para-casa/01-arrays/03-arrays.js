console.clear()
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
const verificar1 = arrayExercicio.includes("sou")
// usando includes, verifique se a frase contém a palavra 'algumas'
const verificar2 = arrayExercicio.includes("algumas")
if (verificar2) {
  console.log("Contém a palavra")
} else {
  console.log("Não contém a palavra, algumas")
}

// usando includes, verifique se a frase contém a palavra 'cachorro'
const verificar3 = arrayExercicio.includes("cachorro")
if (verificar3) {
  console.log("Contém a palavra")
} else {
  console.log("Não contém a palavra, cachorro")
}
// usando includes, verifique se a frase contém a palavra 'amanhã'
const verificar4 = arrayExercicio.includes("amanhã")
if (verificar4) {
  console.log("Contém a palavra")
} else {
  console.log("Não contém a palavra, amanhã")
}

// usando includes, verifique se a array contém a palavra 'banana'
const verificandosecontem = arrayExercicio.includes("banana")
if (verificandosecontem) {
  console.log("A Array contém a palavra banana")
}else {
  console.log("não possui")
}

// usando includes, verifique se a array contém a palavra 'figo'
const procurandofigo = arrayExercicio.includes("figo")
if (procurandofigo){
  console.log("A Array contém a palavra figo")
}else {
  console.log("não possui")
}
// usando includes, verifique se a array contém a palavra 'macarrão'
const procurandoM = arrayExercicio.includes ("macarrão")
if (procurandoM) {
  console.log("A Array contém a palavra macarrão")
}else {
  console.log("não possuia palavra macarrão")
}