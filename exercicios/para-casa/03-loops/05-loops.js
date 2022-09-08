// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.



const frase = "Eu sou uma frase com algumas palavras";
const ocorrencias = (frase.match(/a/g) || []).length;
console.log(ocorrencias);