// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const encontrarIndex = frase.indexOf("sou");
console.log(encontrarIndex, frase[encontrarIndex]);

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const encontrarIndex2 = frase.indexOf("algumas");
console.log(encontrarIndex2, frase[encontrarIndex2]);

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const encontrarIndex3 = frase.indexOf("cachorro");
console.log(encontrarIndex3, frase[encontrarIndex3]);

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
const palavraBuscada = "banana";
const indexFruta = arrayExercicio.indexOf(palavraBuscada);

if (indexFruta > -1) {
  console.log(`Encontrei ${arrayExercicio[indexFruta]} na posição ${indexFruta} `);
} else {
  console.log("Não achei" + palavraBuscada);
}

// usando indexOf, verifique a posição da palavra 'figo'
const palavraBuscada2 = "figo";
const indexFruta2 = arrayExercicio.indexOf(palavraBuscada2);

if (indexFruta2 > -1) {
  console.log(`Encontrei ${arrayExercicio[indexFruta2]} na posição ${indexFruta2} `);
} else {
  console.log("Não achei" + palavraBuscada2);
}

// usando indexOf, verifique a posição da palavra 'macarrão'
const palavraBuscada3 = "macarrão";
const indexFruta3 = arrayExercicio.indexOf(palavraBuscada3);

if (indexFruta3 > -1) {
  console.log(`Encontrei ${arrayExercicio[indexFruta3]} na posição ${indexFruta3} `);
} else {
  console.log("Não achei " + palavraBuscada3);
}