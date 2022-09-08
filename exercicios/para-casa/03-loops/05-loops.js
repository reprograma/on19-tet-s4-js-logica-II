// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas palavras";

let cont = 0
for (letra of frase) {
    if (letra === 'a') {
        cont ++
    }
}
console.log(cont)