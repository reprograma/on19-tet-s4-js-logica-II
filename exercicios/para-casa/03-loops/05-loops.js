// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas palavras";
let contador = 0;
let quantidadeLetrasA = 0;

while (contador < frase.length) {
  if (frase[contador] === 'a') {
    quantidadeLetrasA++
  }
  contador++;
}
console.log(quantidadeLetrasA)

/*
let regexp = /a/g;
console.log(frase.match(regexp).length)
*/