// usando split transforme a frase uma array e coloque cada palavra
// com a primeira letra maiúscula, junte novamente numa frase, e imprima

const frase = "Eu sou uma frase com algumas palavras";

const arrayPicado = frase.split(" ");
console.log("Picado:" , arrayPicado);

const mapeado = arrayPicado
  .map((palavra) => palavra[0].toLocaleUpperCase() + palavra.slice(1))
  .join(" ");

console.log("\nMapeado: ", mapeado);

const juntado = arrayPicado.join(" ");
console.log("\nJuntado: ", juntado);