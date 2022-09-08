// Imprima o que for pedido nos comentários

console.clear();

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
console.log("Frase sou " + frase.includes("sou"));

// usando includes, verifique se a frase contém a palavra 'algumas'
console.log("Frase algumas " + frase.includes("algumas"));

// usando includes, verifique se a frase contém a palavra 'cachorro'
console.log("Frase cachorro " + frase.includes("cachorro"));

// usando includes, verifique se a frase contém a palavra 'amanhã'
console.log("Frase amanhã " + frase.includes("amanhã"));

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
console.log("Array Execicio Banana " + arrayExercicio.includes ("banana"));

// usando includes, verifique se a array contém a palavra 'figo'
console.log("Array Execicio Figo " + arrayExercicio.includes ("figo"));

// usando includes, verifique se a array contém a palavra 'macarrão'
console.log("Array Execicio Macarrão " + arrayExercicio.includes ("macarrão"));