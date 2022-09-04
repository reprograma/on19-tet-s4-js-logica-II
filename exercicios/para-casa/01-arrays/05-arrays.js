console.clear()

// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
const cortaFrase = frase.slice(11,16)
console.log(cortaFrase)

// Usando slice, corte da frase a palavra 'algumas'
const cortaAlgumas = frase.slice(21,28)
console.log(cortaAlgumas)

// Usando slice, corte da frase a frase 'algumas palavras'
const cortaAlgumasPalavras = frase.slice(21)
console.log(cortaAlgumasPalavras)

// Usando slice, corte da frase a palavra 'frase' // repetido! 

console.log('')

// Faça o mesmo dos exercícios acima usando substring
const cortaFraseSub = frase.substring(11,16)
console.log(cortaFraseSub)

const cortaAlgumasSub = frase.substring(21,28)
console.log(cortaAlgumasSub)

const cortaAlgumasPalavrasSub = frase.substring(21)
console.log(cortaAlgumasPalavrasSub)

console.log('')

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Usando slice, colete um pedaço da array do segundo item em diante
// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
// Usando slice, colete um pedaço da array: os dois últimos itens


const cortaSegundo = arrayExercicio.slice(1)
console.log(cortaSegundo)
const cortaTerceiroAteQuinto = arrayExercicio.slice(2,5)
console.log(cortaTerceiroAteQuinto)
const cortaDoisUltimos = arrayExercicio.slice(-2)
console.log(cortaDoisUltimos)
