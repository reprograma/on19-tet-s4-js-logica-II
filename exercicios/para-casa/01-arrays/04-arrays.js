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
const listaFrutas = ["banana", "pera", "uva", "maça", "figo", "abacaxi", "caviar"];
const indexFruta = listaFrutas.indexOf("banana");

if (indexFruta > -1) {
  console.log(`Encontrei ${listaFrutas[indexFruta]} na posição ${indexFruta} `);
} else {
  console.log("Não achei");
}

// usando indexOf, verifique a posição da palavra 'figo'
const frutasDisponiveis = ["banana", "pera", "uva", "maça", "figo", "abacaxi", "caviar"];
const indexFrutas = frutasDisponiveis.indexOf("figo");

if (indexFrutas > -1) {
  console.log(`Encontrei ${frutasDisponiveis[indexFrutas]} na posição ${indexFrutas} `);
} else {
  console.log("Não achei");
}


// usando indexOf, verifique a posição da palavra 'macarrão'
const escolherFruta = ["banana", "pera", "uva", "maça", "figo", "abacaxi", "caviar"];
const indexFruit = escolherFruta.indexOf("macarrão");

if (indexFruit > -1) {
  console.log(`Encontrei ${escolherFruta[indexFruit]} na posição ${indexFruit} `);
} else {
  console.log("Não achei");
}