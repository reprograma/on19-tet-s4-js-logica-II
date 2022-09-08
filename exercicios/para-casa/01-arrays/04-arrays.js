// Imprima o que for pedido nos comentários

console.clear();

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const indexEncontrado = frase.indexOf("sou");
console.log(indexEncontrado, frase[indexEncontrado]);

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const Encontrado = frase.indexOf("algumas")
console.log(Encontrado, frase[Encontrado])

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const localizado = frase.indexOf("cachorro")
console.log(localizado, frase[localizado])

const arrayExercicio = [
  "Banana",
  "Pera",
  "Uva",
  "Maça",
  "Figo",
  "Abacaxi",
  "Caviar"
];


// usando indexOf, verifique a posição da palavra 'banana'
const listaFrutas = ["Banana", "Pera", "Uva", "Maça", "Figo", "Abacaxi", "Caviar"];
const palavraBuscada = "Banana";
const indexFruta = listaFrutas.indexOf(palavraBuscada);

if (indexFruta > -1) {
  console.log(`Encontrei ${listaFrutas[indexFruta]} na posição ${indexFruta} `);
} else {
  console.log("Não achei" + palavraBuscada);
}

// usando indexOf, verifique a posição da palavra 'figo'

const listaItens = ["Banana", "Pera", "Uva", "Maça", "Figo", "Abacaxi", "Caviar"];
const palavraEncontrada = "Figo";
const indexItem = listaItens.indexOf(palavraEncontrada);

if (indexItem > -1) {
  console.log(`Encontrei ${listaItens[indexItem]} na posição ${indexItem} `);
} else {
  console.log("Não achei" + palavraEncontrada);
}
 
// usando indexOf, verifique a posição da palavra 'macarrão'
const frutasLista = ["Banana", "Pera", "Uva", "Maça", "Figo", "Abacaxi", "Caviar"];
const palavraLocalizada = "Macarrão";
const indexLocalizado = frutasLista.indexOf(palavraLocalizada)

if (indexLocalizado > -1) {
  console.log(`Encontrei ${frutasLista[indexLocalizado]} na posição ${indexLocalizado} `);
} else {
  console.log("Não achei " + palavraLocalizada);
}
  
