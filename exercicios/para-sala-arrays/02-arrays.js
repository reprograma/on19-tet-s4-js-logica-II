
console.clear();
const frase = "Eu sou uma frase com algumas palavras";

//acessando índice da string
console.log(frase[3], frase[4], frase[5]);

// procurando se existe um parte da string
console.log("Buscando em string");
const palavraBuscada = "palavras"
if (frase.includes(palavraBuscada)) {
  console.log("Encontrei", frase.includes(palavraBuscada));
} else {
  console.log("Não encontrei", frase.includes(palavraBuscada));
}

// procurando algo na array
console.log("\nBuscando em array");
const listaTextos = ["Banana", "Pera", "Maça"];

const encontrouPalavraBuscada = listaTextos.includes("Pera");
if (encontrouPalavraBuscada) {
  console.log("Encontrei", encontrouPalavraBuscada);
} else {
  console.log("Não encontrei", encontrouPalavraBuscada);
}
 