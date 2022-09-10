// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";


// Usando slice, corte da frase a palavra 'frase'
const arrayCortada = frase.slice(11,17);
console.log("string", arrayCortada);


// Usando slice, corte da frase a palavra 'algumas'
const arrayCortada2 = frase.slice(21,29);
console.log("\n", arrayCortada2);



// Usando slice, corte da frase as frase 'algumas palavras'
const arrayCortada3 = frase.slice(-17);
console.log("\n", arrayCortada3);


// Usando slice, corte da frase a palavra 'frase'


// Faça o mesmo dos exercícios acima usando substring

const listaFrutas = [
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

const arrayExercicio = listaFrutas.slice(1);
console.log("\nÍndice positivo", arrayExercicio);

const arrayExercicio2 = listaFrutas.slice(3,4);
console.log("\nÍndice negativo", arrayExercicio2);

const arrayExercicio3 = listaFrutas.slice(-2);
console.log("\nposição parada", arrayExercicio3);
