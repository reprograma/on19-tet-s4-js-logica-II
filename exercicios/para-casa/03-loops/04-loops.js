// usando split transforme a frase uma array e coloque cada palavra
// com a primeira letra maiúscula, junte novamente numa frase, e imprima

const frase = "Eu sou uma frase com algumas palavras";

let arrayFrase = frase.split(" ");
const printFrase = arrayFrase.map((itemArray) => itemArray[0].toLocaleUpperCase() + itemArray.slice(1)).join(" ");
console.log(printFrase);