// usando split transforme a frase em uma array e coloque cada palavra
// com a primeira letra maiúscula, junte novamente numa frase, e imprima

const frase = "Eu sou uma frase com algumas palavras";

const transformaArray = frase.split(' ')
const primeirasMaiusculas = transformaArray.map(item => 
item[0].toUpperCase() + item.slice(1).toLowerCase())
console.log(primeirasMaiusculas)

const novaFrase = primeirasMaiusculas.join(" ")
console.log(novaFrase)