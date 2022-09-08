// Imprima o que for pedido nos comentários
console.clear()

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
const sou = frase.includes("sou", 0)

console.log(sou)

// usando includes, verifique se a frase contém a palavra 'algumas'
const algumas = frase.includes("algumas", 0)

console.log(algumas)

// usando includes, verifique se a frase contém a palavra 'cachorro'

const cachorro = frase.includes("cachorro", 0)

console.log(cachorro)
// usando includes, verifique se a frase contém a palavra 'amanhã'
const amanha = frase.includes("amanha", 0)

console.log(amanha)

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando includes, verifique se a array contém a palavra 'banana'
const banana = arrayExercicio.includes("banana", 0)

console.log(banana)

// usando includes, verifique se a array contém a palavra 'figo'

const figo = arrayExercicio.includes("figo", 0)

console.log(figo)
// usando includes, verifique se a array contém a palavra 'macarrão'
const macarrao = arrayExercicio.includes("macarrão", 0)

console.log(macarrao)