// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const indexEncontrado1 = frase.indexOf("sou");
console.log(indexEncontrado11, frase[indexEncontrado1]);

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const indexEncontrado2 = frase.indexOf("algumas");
console.log(indexEncontrado2, frase[indexEncontrado2]);

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const indexEncontrado3 = frase.indexOf("cachorro");
console.log(indexEncontrado3, frase[indexEncontrado3]);

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];


// usando indexOf, verifique a posição da palavra 'banana'
const indexEncontrado4 = arrayExercicio.indexOf("banana");
console.log(indexEncontrado4, arrayExercicio[indexEncontrado4]);

// usando indexOf, verifique a posição da palavra 'figo'
const indexEncontrado5 = arrayExercicio.indexOf("figo");
console.log(indexEncontrado5, arrayExercicio[indexEncontrado5]);

// usando indexOf, verifique a posição da palavra 'macarrão'
const indexEncontrado = arrayExercicio.indexOf("macarrão");
console.log(indexEncontrado, arrayExercicio[indexEncontrado]);
