// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
console.log( frase.indexOf('sou')) //3


// usando indexOf, verifique o index de inicio da palavra 'algumas'
console.log(frase.indexOf('algumas'))//21

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
console.log(frase.indexOf("cachorro")) // -1

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];


// usando indexOf, verifique a posição da palavra 'banana'
console.log(arrayExercicio.indexOf('banana')) // 0

// usando indexOf, verifique a posição da palavra 'figo'
console.log(arrayExercicio.indexOf('figo')) // 4

// usando indexOf, verifique a posição da palavra 'macarrão'
console.log(arrayExercicio.indexOf('macarrão')) // -1

/* IMPORTANTE SABER :
o método indexOf() do objeto String pode ser utilizado 
para recuperar a posissão inicial de um elemento, dentro de uma sequência de caracteres.
 Caso esse elemento nãoo exista, ao retornado o valor -1.*/