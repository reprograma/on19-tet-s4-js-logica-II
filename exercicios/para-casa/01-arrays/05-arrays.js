// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";
var array = frase.split(" ");

// Usando slice, corte da frase a palavra 'frase'
const frase2 = array.slice(3);
console.log(frase2)

// Usando slice, corte da frase a palavra 'algumas'

const frase3 = array.slice(5);
console.log(frase3)

// Usando slice, corte da frase as frase 'algumas palavras'

const frase4 = array.slice(4);
console.log(frase4)

// Usando slice, corte da frase a palavra 'frase'
const frase5 = array.slice(3);
console.log(frase5)

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
const Cortou = arrayExercicio.slice(1);
console.log(Cortou);

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
const Cortou2 = arrayExercicio.slice(3,5);
console.log(Cortou2);

// Usando slice, colete um pedaço da array: os dois últimos itens
const Cortou3 = arrayExercicio.slice(0,5);
console.log(Cortou3);