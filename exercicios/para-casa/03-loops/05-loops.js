// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.



const frase = "Eu sou uma frase com algumas palavras";
let count = 0
for (letter of frase) {
    if (letter === 'a') {
        count ++
    }
}
console.log(count) // 7 letras 'a'