console.clear ();
// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
// Cortando arrays
const strCortada = frase.slice(0,11);
const strCortada2=frase.slice(17,37)
console.log(strCortada + strCortada2);

// Usando slice, corte da frase a palavra 'algumas'
const strCortada1 = frase.slice(0,20);
const strCortada3 = frase.slice(27,37);
console.log(strCortada1 + strCortada3);

// Usando slice, corte da frase as frase 'algumas palavras'
const strCortada4 = frase.slice(0,20);
console.log(strCortada4);

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
const arrayCortada1 = arrayExercicio.slice(3,4,5);
console.log(arrayCortada1);

// Usando slice, colete um pedaço da array: os dois últimos itens
const arrayCortada2 = arrayExercicio.slice(6,5)
console.log(arrayCortada2)