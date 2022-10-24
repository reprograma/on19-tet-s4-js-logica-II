// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
console.log("\nusando includes, verifique se a frase contém a palavra 'sou'");
const encontrouPalavraBuscada = frase.includes("sou");
if (encontrouPalavraBuscada) {
  console.log("Encontrei a palavra?", encontrouPalavraBuscada);
} else {
  console.log("Não encontrei", encontrouPalavraBuscada);
}

// usando includes, verifique se a frase contém a palavra 'algumas'
console.log("\nusando includes, verifique se a frase contém a palavra 'algumas'");
const palavraBuscada = "algumas"
if (frase.includes(palavraBuscada)) {
  console.log("Encontrei?", frase.includes(palavraBuscada));
} else {
  console.log("Não encontrei", frase.includes(palavraBuscada));
}

// usando includes, verifique se a frase contém a palavra 'cachorro'
console.log("\nusando includes, verifique se a frase contém a palavra 'cachorro'");
const acharPalavra = "cachorro"
if (frase.includes(acharPalavra)) {
  console.log("Achei?", frase.includes(acharPalavra));
} else {
  console.log("Não acheii", frase.includes(acharPalavra));
}

// usando includes, verifique se a frase contém a palavra 'amanhã'
console.log("\nusando includes, verifique se a frase contém a palavra 'sou'");
const qualPalavra = frase.includes("amanhã");
if (qualPalavra) {
  console.log("Encontrei a palavra?", qualPalavra);
} else {
  console.log("Não encontrei", qualPalavra);
}



// usando includes, verifique se a array contém a palavra 'banana'
console.log("\nusando includes, verifique se a array contém a palavra 'banana'");
const listaTextos = [
"banana",
"pera",
"uva",
"maça",
"figo",
"abacaxi",
"caviar"
];

const encontrouFrutaBuscada = listaTextos.includes("banana");
if (encontrouFrutaBuscada) {
  console.log("Encontrei", encontrouFrutaBuscada);
} else {
  console.log("Não encontrei", encontrouFrutaBuscada);
}

// usando includes, verifique se a array contém a palavra 'figo'
console.log("\nusando includes, verifique se a array contém a palavra 'figo'");
const listaFrutas = [
"banana",
"pera",
"uva",
"maça",
"figo",
"abacaxi",
"caviar"
];

const FrutaBuscada = listaFrutas.includes("figo");
if (FrutaBuscada) {
  console.log("Encontrei", FrutaBuscada);
} else {
  console.log("Não encontrei", FrutaBuscada);
}

// usando includes, verifique se a array contém a palavra 'macarrão'
console.log("\nusando includes, verifique se a array contém a palavra 'macarrão'");

const frutasDisponiveis = [
"banana",
"pera",
"uva",
"maça",
"figo",
"abacaxi",
"caviar"
];

const itemProcurado = frutasDisponiveis.includes("macarrão");
if (itemProcurado) {
  console.log("Encontrei", itemProcurado);
} else {
  console.log("Não encontrei", itemProcurado);
}