// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
const strCortada = frase.slice(0,11) + frase.slice(17,37); 
console.log(strCortada);

// Usando slice, corte da frase a palavra 'algumas'
const strCorte = frase.slice(0,21) + frase.slice(29,37); 
console.log(strCorte);

// Usando slice, corte da frase as frase 'algumas palavras'
const cortada = frase.slice(0,21) + frase.slice(-1,-1); 
console.log(cortada);

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
console.log("\nÍndice positivo", arrayCortada)

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
const arrayCortada2 = arrayExercicio.slice(2, 5);
console.log("\nÍndice positivo", arrayCortada2)

// Usando slice, colete um pedaço da array: os dois últimos itens
const arrayCortada3 = arrayExercicio.slice(5);
console.log("\nÍndice positivo", arrayCortada3)