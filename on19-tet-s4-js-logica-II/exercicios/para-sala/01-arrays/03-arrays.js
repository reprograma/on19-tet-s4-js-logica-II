console.clear();
const frase = "Eu sou uma frase com algumas palavras";

// achar o índice de algo
const indexEncontrado = frase.indexOf("sou");
console.log(indexEncontrado, frase[indexEncontrado]);

// achar o índice de um item na array
const listaFrutas = ["Banana", "Pera", "Maça", "Pera"];
const palavraBuscada = "Pera";
const indexFruta = listaFrutas.indexOf(palavraBuscada);

if (indexFruta > -1) {
  console.log(`Encontrei ${listaFrutas[indexFruta]} na posição ${indexFruta} `);
} else {
  console.log("Não achei" + palavraBuscada);
}
