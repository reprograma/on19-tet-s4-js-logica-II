// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
console.log(frase.slice(0, 11) + frase.slice(17));

// Usando slice, corte da frase a palavra 'algumas'
console.log(frase.slice(0, 21) + frase.slice(29, 38));

// Usando slice, corte da frase as frase 'algumas palavras'
console.log(frase.slice(0, 21));

// Usando slice, corte da frase a palavra 'frase'
console.log(frase.slice(0, 11) + frase.slice(17));

// Faça o mesmo dos exercícios acima usando substring
console.log(frase.substring(0, 11) + frase.substring(17));

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
console.log(arrayExercicio.slice(1));

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
console.log(arrayExercicio.slice(2, 5));

// Usando slice, colete um pedaço da array: os dois últimos itens
console.log(arrayExercicio.slice(5));