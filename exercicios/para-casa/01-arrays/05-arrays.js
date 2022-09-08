// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'

const strCortada = frase.slice(0,11) + frase.slice(17, 37);
console.log(strCortada);


// Usando slice, corte da frase a palavra 'algumas'

const strCort = frase.slice(0,21) + frase.slice(29,37);
console.log(strCort);

// Usando slice, corte da frase as frase 'algumas palavras'

const strCorte = frase.slice(0,21) + frase.slice(-1,-1);
console.log(strCorte);






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

const arrayCort = arrayExercicio.slice(1);
console.log(arrayCort);

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item

const arrayCortado = arrayExercicio.slice(2,-3);
console.log(arrayCortado);

// Usando slice, colete um pedaço da array: os dois últimos itens

const arrayCortados = arrayExercicio.slice(-2);
console.log(arrayCortados);
