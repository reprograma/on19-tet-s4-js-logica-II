console.clear ();
// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const indiceEncontrado = frase.indexOf("sou");
console.log(indiceEncontrado, frase[indiceEncontrado]);

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const indiceEncontrado1 = frase.indexOf("algumas");
console.log(indiceEncontrado1, frase[indiceEncontrado]);

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const indiceEncontrado2 = frase.indexOf("cachorro");
console.log(indiceEncontrado2, frase[indiceEncontrado]);

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

const indiceEncontrado3 = arrayExercicio.indexOf("banana");
console.log("a banana está na posição " +  indiceEncontrado3)


// usando indexOf, verifique a posição da palavra 'figo'
const indiceEncontrado4 = arrayExercicio.indexOf("figo");
console.log("o figo está na posição " +  indiceEncontrado4)

// usando indexOf, verifique a posição da palavra 'macarrão'
const indiceEncontrado5 = arrayExercicio.indexOf("macarrão");
console.log("o macarrão está na posição " +  indiceEncontrado5)
