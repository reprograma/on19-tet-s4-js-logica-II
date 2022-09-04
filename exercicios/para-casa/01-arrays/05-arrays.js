// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
const cortando1 = frase.slice(10, 4)
console.log(cortando1)

// Usando slice, corte da frase a palavra 'algumas'
const cortando2 = frase.slice(5)
console.log(cortando2)

// Usando slice, corte da frase as frase 'algumas palavras'
const cortando3 = frase.slice(5, 6)
console.log(cortando3)

// Usando slice, corte da frase a palavra 'frase'
const cortando4 = frase.slice(10, 15)
console.log(cortando4)

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

const corte = arrayExercicio.slice(3, 5)
console.log(corte)
// Usando slice, colete um pedaço da array: os dois últimos itens
const corte2 = arrayExercicio.slice(0, 5)
console.log(corte2)
