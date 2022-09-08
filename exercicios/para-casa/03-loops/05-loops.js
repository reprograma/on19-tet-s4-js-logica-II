// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.
console.clear();

const frase = "Eu sou uma frase com algumas palavras";

let count = 0;
for (let index = 0; index < frase.length; index++) {
    if (frase[index] === "a") {
        count++;
    }
}
console.log(`O número total de letras "a" é igual a ${count}.`);