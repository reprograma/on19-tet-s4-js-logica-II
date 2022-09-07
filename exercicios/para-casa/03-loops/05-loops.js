// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.


const frase = "Eu sou uma frase com algumas palavras";

let letraA = 0

const transformaEmArray = frase.split('');

for (let i = 0; i < transformaEmArray.length; i++) {
    if(transformaEmArray[i]=== 'a'){
        letraA++
    }
  }

  console.log("Existem", letraA, "letras 'a' na frase");