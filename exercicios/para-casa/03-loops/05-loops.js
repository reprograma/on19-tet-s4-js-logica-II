// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

console.clear();
const frase = "Eu sou uma frase com algumas palavras";

const quantidade = (frase.match(/a/g) || []).length;
console.log(quantidade);