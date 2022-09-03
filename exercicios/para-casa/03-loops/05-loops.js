// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas palavras";


let contador = 0;
let LetrasAchadas = 0;
const letraProcurada = "a";

while (contador < frase.length) {
    contador++;
    if (frase[contador] === letraProcurada) {
      LetrasAchadas++
    }
  }
  
  console.log("While: Achei " + LetrasAchadas + " dessa letra");
  LetrasAchadas = 0;
  
