// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

//usando indexOf, verifique o index de inicio da palavra 'sou'
const encontrarPalavra = "sou";
const indexPalavra = frase.indexOf(encontrarPalavra);

if (indexPalavra > -1) {
console.log(`Encontrei ${frase[indexPalavra]} na posição ${indexPalavra}`);
} else {
console.log("Não encontrei " + encontrarPalavra);
}
 //usando indexOf, verifique o index de inicio da palavra 'algumas'
 const encontrarPalavra2 = "algumas";
 const indexPalavra2 = frase.indexOf(encontrarPalavra2);
 
 if (indexPalavra2 > -1) {
 console.log(`Encontrei ${frase[indexPalavra2]} na posição ${indexPalavra2}`);
 } else {
 console.log("Não encontrei " + encontrarPalavra2);
 }

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const encontrarPalavra3 = "cachorro";
const indexPalavra3 = frase.indexOf(encontrarPalavra3);

if (indexPalavra3 > -1) {
console.log(`Encontrei ${frase[indexPalavra3]} na posição ${indexPalavra3}`);
} else {
console.log("Não encontrei " + encontrarPalavra3);
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
const fruta = "banana";
const posicaoFruta = arrayExercicio.indexOf(fruta);

if (posicaoFruta > -1 ) {
  console.log(`A posição de ${fruta} é ${posicaoFruta}`);
} else {
  console.log(`fruta não encontrada`);
}

// usando indexOf, verifique a posição da palavra 'figo'
const fruta2 = "figo";
const posicaoFruta2 = arrayExercicio.indexOf(fruta2);

if (posicaoFruta2 > -1 ) {
  console.log(`A posição de ${fruta2} é ${posicaoFruta2}`);
} else {
  console.log(`fruta não encontrada`);
}

// usando indexOf, verifique a posição da palavra 'macarrão'
const fruta3 = "macarrão";
const posicaoFruta3 = arrayExercicio.indexOf(fruta3);

if (posicaoFruta3 > -1 ) {
  console.log(`A posição de ${fruta3} é ${posicaoFruta3}`);
} else {
  console.log(`fruta não encontrada`);
}
