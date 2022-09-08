// usando split transforme a frase uma array e coloque cada palavra
// com a primeira letra maiúscula, junte novamente numa frase, e imprima
console.clear();

const frase = "Eu sou uma frase com algumas palavras";

const newArray = frase.split(' ');
const UpperCase = newArray
.map((item) => item[0].toUpperCase() + item.slice(1))
.join(" ");
console.log(UpperCase);