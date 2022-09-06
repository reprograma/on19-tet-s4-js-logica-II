// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";


// Usando slice, corte da frase a palavra 'frase'
const divideFrase = frase.split("frase")
console.log(divideFrase.join(''));


// Usando slice, corte da frase a palavra 'algumas'
const divideFrase2 = frase.split("algumas")
console.log(divideFrase2.join(''));


// Usando slice, corte da frase as frase 'algumas palavras'
const divideFrase3 = frase.slice(0,20);
console.log(divideFrase3);


// Usando slice, corte da frase a palavra 'frase'
const divideFrase4 = frase.slice(0,11)
const divideFrase5 = frase.slice(-20)
console.log(divideFrase4 + divideFrase5, "\n");


// Faça o mesmo dos exercícios acima usando substring

// Imprima o que for pedido nos comentários

// Usando substring, corte da frase a palavra 'frase'
const cortaFrase = frase.substring(0,11);
const cortaFrase1 = frase.substring(16,37);
console.log(cortaFrase + cortaFrase1);


// Usando substring, corte da frase a palavra 'algumas'
const cortaFrase2 = frase.substring(0,21)
const cortaFrase3 = frase.substring(29,37);
console.log(cortaFrase2 + cortaFrase3 );


// Usando substring, corte da frase as frase 'algumas palavras'
const cortaFrase4 = frase.substring(0,20);
console.log(cortaFrase4);


// Usando substring, corte da frase a palavra 'frase'
const cortaFrase5 = frase.substring(0,11);
const cortaFrase6 = frase.substring(16,37);
console.log(cortaFrase5 + cortaFrase6);


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
const arrayFrutas = arrayExercicio.slice(1);
console.log('\nSegundo item em diante', arrayFrutas);

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
const arrayFrutas2 = arrayExercicio.slice(2,5);
console.log('\nEntre o terceiro e o quinto item', arrayFrutas2);

// Usando slice, colete um pedaço da array: os dois últimos itens
const arrayFrutas3 = arrayExercicio.slice(-2);
console.log('\nDois últimos itens', arrayFrutas3);
