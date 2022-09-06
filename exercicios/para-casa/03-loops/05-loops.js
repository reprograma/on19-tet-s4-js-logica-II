// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas paalvras";

const letters = frase.split("")
let counter = 0
for (let char of letters)
{
    if (char == 'a' || char == 'A')
    {
        counter++
    }
}
console.log ('Temos', counter, "a's na frase:", frase)