// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'


// Usando slice, corte da frase a palavra 'algumas'


// Usando slice, corte da frase as frase 'algumas palavras'


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

const arrayCortada = arrayExercicio.slice(1);
console.log(arrayCortada);

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item

const arrayCortada2 = arrayExercicio.slice(2,5);
console.log(arrayCortada2);

// Usando slice, colete um pedaço da array: os dois últimos itens
const arrayCortada3 = arrayExercicio.slice(5,7);
console.log(arrayCortada3);

