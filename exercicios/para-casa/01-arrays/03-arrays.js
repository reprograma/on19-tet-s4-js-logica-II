// Imprima o que for pedido nos comentários

console.clear();

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
console.log(frase.includes("sou"))// true

// usando includes, verifique se a frase contém a palavra 'algumas'
console.log(frase.includes("algumas")) //true

// usando includes, verifique se a frase contém a palavra 'cachorro'
console.log(frase.includes("cachorro"))//false


// usando includes, verifique se a frase contém a palavra 'amanhã'
console.log(frase.includes("amanhã")) //false


const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando includes, verifique se a array contém a palavra 'banana'
console.log(arrayExercicio.includes("banana")) //true

// usando includes, verifique se a array contém a palavra 'figo'
console.log(arrayExercicio.includes("figo")) //true


// usando includes, verifique se a array contém a palavra 'macarrão'
console.log(arrayExercicio.includes("macarrão")) //false

// IMPORTANTE SABER 
/* A função includes() do JavaScript verifica se 
um determinado elemento está presente em um array. 
Ele retorna um valor booleano. Portanto,
 é mais adequado em verificações de condição if.
 A função leva dois parâmetros.
  Normalmente, usamos esta função na forma 
  .includes(searchString). O parâmetro searchString 
  é o elemento que desejamos pesquisar, e o parâmetro 
  index refere-se ao índice do array a partir do qual pesquisar.
   O parâmetro index é opcional.*/