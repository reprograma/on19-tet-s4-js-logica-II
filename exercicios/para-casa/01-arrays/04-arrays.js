console.clear();
// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const indexEncontrado = frase.indexOf("sou");
console.log(indexEncontrado, frase[indexEncontrado]);

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const indexEncontrado2 = frase.indexOf("algumas");
console.log(indexEncontrado2, frase[indexEncontrado2]);

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const indexEncontrado3 = frase.indexOf("cachorro");
if (frase[indexEncontrado3]) {
    console.log(`Encontrei ${frase[indexEncontrado3]} na posição ${indexEncontrado3} `);
} else {
  console.log("Não encontrado") 
}



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
const indexPalavra = arrayExercicio.indexOf("banana");
console.log(indexPalavra, arrayExercicio[indexPalavra]);

// usando indexOf, verifique a posição da palavra 'figo'
const indexPalavra2 = arrayExercicio.indexOf("figo");
console.log(indexPalavra2, arrayExercicio[indexPalavra2]);

// usando indexOf, verifique a posição da palavra 'macarrão'
const indexPalavra3 = arrayExercicio.indexOf("macarrão");

if (indexPalavra3 > -1) {
  console.log(`Encontrei ${arrayExercicio[indexPalavra3]} na posição ${indexPalavra3} `);
} else {
  console.log("Não encontrado");
}