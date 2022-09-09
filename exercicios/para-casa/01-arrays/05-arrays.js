// Imprima o que for pedido nos comentários
console.clear();
const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
console.log(frase.slice(0,10) + frase.slice(16));

// Usando slice, corte da frase a palavra 'algumas'
console.log(frase.slice(0,20) + frase.slice(28));

// Usando slice, corte da frase as frase 'algumas palavras'
console.log(frase.slice(0,20) + frase.slice(37));

// Usando slice, corte da frase a palavra 'frase'
console.log(frase.slice(0,10) + frase.slice(16));

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
console.log(arrayExercicio.slice(1));

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
console.log(arrayExercicio.slice(3,4));

// Usando slice, colete um pedaço da array: os dois últimos itens
console.log(arrayExercicio.slice(5));