console.clear();
// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
const strCortada = frase.slice(11, 16);
console.log(strCortada);

// Usando slice, corte da frase a palavra 'algumas'


// Usando slice, corte da frase as frase 'algumas palavras'


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
const itemCortado = listaFrutas.slice(1);
console.log(itemCortado);


// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
const itemCortado2 = listaFrutas.slice(2, 5);
console.log(itemCortado2);

// Usando slice, colete um pedaço da array: os dois últimos itens
const itemCortado3 = listaFrutas.slice(5);
console.log(itemCortado3);