// usando split transforme a frase uma array e coloque cada palavra
// com a primeira letra maiúscula, junte novamente numa frase, e imprima

console.clear ()

const frase = "Eu sou uma frase com algumas palavras";

const words =frase.split(" ")
console.log (words)
let letter
const almost = []

for (let word of words)
{
    letter = word[0].toLocaleUpperCase() + word.slice(1)
    almost.push(letter)
}
const done = almost.join (" ")
console.log (done)