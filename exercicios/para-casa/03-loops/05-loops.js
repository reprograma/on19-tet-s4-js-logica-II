// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas palavras";

var qtd = 0;
for (var x of frase) {
    if (x === "a") qtd++;
}
console.log("A quantidade de elementos 'a' dentro da frase é: " + qtd); 


