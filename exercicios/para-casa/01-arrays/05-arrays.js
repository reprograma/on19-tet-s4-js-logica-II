// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
const sliceFrase = frase.slice(11,16)

console.log(sliceFrase)

// Usando slice, corte da frase a palavra 'algumas'
const algumas = frase.indexOf("algumas", 0)

const sliceAlgumas = frase.slice(21, 28)

console.log(sliceAlgumas)

// Usando slice, corte da frase as frase 'algumas palavras'
const palavras = frase.indexOf("palavras", 0)

const sliceAlgumasPalavras = frase.slice(21, 37)

console.log(sliceAlgumasPalavras)


// Usando slice, corte da frase a palavra 'frase'


// Faça o mesmo dos exercícios acima usando substring

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
