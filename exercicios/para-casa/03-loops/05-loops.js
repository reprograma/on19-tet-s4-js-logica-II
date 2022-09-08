// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas palavras";

var total = 0;
var letraProcurada = "a";

[...frase].forEach(letra => { 
   if (letra === letraProcurada) 
   total ++; 
});

console.log(total);

