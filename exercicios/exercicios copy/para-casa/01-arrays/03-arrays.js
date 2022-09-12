// Imprima o que for pedido nos comentários
console.clear();
const frase = "Eu sou uma frase com algumas palavras";




// usando includes, verifique se a frase contém a palavra 'sou'
const palavraBuscada ="sou"

if (frase.includes(palavraBuscada)) {
  console.log("Encontrei", frase.includes(palavraBuscada));
} else {
  console.log("Não encontrei", frase.includes(palavraBuscada));
}

// usando includes, verifique se a frase contém a palavra 'algumas'

const palavraBuscada1 ="algumas"

if (frase.includes(palavraBuscada1)) {
  console.log("Encontrei", frase.includes(palavraBuscada1));
} else {
  console.log("Não encontrei", frase.includes(palavraBuscada1));
}

// usando includes, verifique se a frase contém a palavra 'cachorro'

const palavraBuscada2 ="cachorros"

if (frase.includes(palavraBuscada2)) {
  console.log("Encontrei", frase.includes(palavraBuscada2));
} else {
  console.log("Não encontrei", frase.includes(palavraBuscada2));
}

// usando includes, verifique se a frase contém a palavra 'amanhã'

const palavraBuscada3 ="amanhã"

if (frase.includes(palavraBuscada3)) {
  console.log("Encontrei", frase.includes(palavraBuscada3));
} else {
  console.log("Não encontrei", frase.includes(palavraBuscada3));
}




// procurando algo na array

console.log("\nBuscando em array");

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando includes, verifique se a array contém a palavra 'banana'

const encontrouPalavraBuscada = arrayExercicio.includes("banana");

if (encontrouPalavraBuscada) {
  console.log("Encontrei", encontrouPalavraBuscada);
} else {
  console.log("Não encontrei", encontrouPalavraBuscada);
}


// usando includes, verifique se a array contém a palavra 'figo'



const encontrouPalavraBuscada1 = arrayExercicio.includes("figo");

if (encontrouPalavraBuscada1) {
  console.log("Encontrei", encontrouPalavraBuscada1);
} else {
  console.log("Não encontrei", encontrouPalavraBuscada1);
}


// usando includes, verifique se a array contém a palavra 'macarrão'
const encontrouPalavraBuscada2 = arrayExercicio.includes("macarrão");

if (encontrouPalavraBuscada2) {
  console.log("Encontrei", encontrouPalavraBuscada2);
} else {
  console.log("Não encontrei", encontrouPalavraBuscada2);
}