// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";


// usando indexOf, verifique o index de inicio da palavra 'sou'
const indexEncontrado = frase.indexOf("sou");
console.log(indexEncontrado, frase[indexEncontrado]);

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const indexEncontrado1 = frase.indexOf("algumas");
console.log(indexEncontrado1, frase[indexEncontrado1]);

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const indexEncontrado2 = frase.indexOf("cachorro");
console.log(indexEncontrado2, frase[indexEncontrado2]);

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
const indexEncont1 = arrayExercicio.indexOf("banana");
console.log(indexEncont1, arrayExercicio[indexEncont1]);


// usando indexOf, verifique a posição da palavra 'figo'
const indexEncont2 = arrayExercicio.indexOf("figo");
console.log(indexEncont2,arrayExercicio[indexEncont2]);


// usando indexOf, verifique a posição da palavra 'macarrão'
const indexEncont3 = arrayExercicio.indexOf("macarrão");
console.log(indexEncont3, arrayExercicio[indexEncont3]);
