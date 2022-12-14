// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = 'Eu sou uma frase com algumas palavras'
let contA = []
for (let index = 0; index < frase.length; index++) {
  if (frase[index] === 'a') {
    let achouA = Array.of(frase[index])
    contA += achouA
    //console.log(contA.length, achouA);
  }
}
console.log(`Tem ${contA.length} letras "a" na frase: ${frase}`)
//console.log(contA);
