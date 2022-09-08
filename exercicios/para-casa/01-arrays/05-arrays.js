// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'

console.log(frase.slice(11, -21))

// Usando slice, corte da frase a palavra 'algumas'
console.log(frase.slice(21, 28))

// Usando slice, corte da frase as frase 'algumas palavras'
console.log(frase.slice(21, 37))




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
console.log(arrayExercicio.slice(1, 6))

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
console.log(arrayExercicio.slice(3, -3))

// Usando slice, colete um pedaço da array: os dois últimos itens
console.log(arrayExercicio.slice(5, 7))

// OBS:
 /*slice(), que permite “fatiar” uma string ou array e recuperar parte dos seus elementos.*/
//string.slice(posicaoInicial [, posicaoFinal])
