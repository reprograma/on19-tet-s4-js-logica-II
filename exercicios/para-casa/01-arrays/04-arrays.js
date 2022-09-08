// Imprima o que for pedido nos comentários
console.clear()
const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const sou = frase.indexOf("sou", 0)

console.log(sou)

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const algumas = frase.indexOf("algumas", 0)

console.log(algumas)

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const cachorro = frase.indexOf("cachorro", 0)

console.log(cachorro)

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];


// usando indexOf, verifique a posição da palavra 'banana'

const banana = arrayExercicio.indexOf("banana", 0)

console.log(banana)
// usando indexOf, verifique a posição da palavra 'figo'
const figo = arrayExercicio.indexOf("figo", 0)

console.log(figo)

// usando indexOf, verifique a posição da palavra 'macarrão'
const macarrão = arrayExercicio.indexOf("macarrão", 0)

console.log(macarrão)