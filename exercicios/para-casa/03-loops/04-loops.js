// usando split transforme a frase uma array e coloque cada palavra
// com a primeira letra maiúscula, junte novamente numa frase, e imprima

const frase = "Eu sou uma frase com algumas palavras";

const arrayPartida = frase.split(" ");
console.log("Partida: ", arrayPartida);
let result = ''
for (const element of frase.split(' ')) {
    result += element[0].toUpperCase() + element.slice(1) + ' '
}
console.log(result)