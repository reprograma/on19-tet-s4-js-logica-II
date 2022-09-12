// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas palavras";
const ocorrencias = (frase.match(/a/g) || []).length;
console.log(ocorrencias);

//outra possibilidade
/*const frase = "Eu sou uma frase com algumas palavras";

let contador = 0;
for (let index = 0; index < frase.length; index++) {
  if (frase[index].toLowerCase() === 'a') {
    contador = contador + 1 // contador++ // contador +=1
  }
}*/



