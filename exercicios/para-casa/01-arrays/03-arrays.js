// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'

if(frase.includes("sou")){

  console.log('Achei a Palavra Sou neste Frase');

}else
  console.log("A Palavra SOU não foi encontrada");

// usando includes, verifique se a frase contém a palavra 'algumas'
if(frase.includes("algumas")){

  console.log('Achei a Palavra Algumas neste Frase');

}else
  console.log("Não achei algumas ");


// usando includes, verifique se a frase contém a palavra 'cachorro'
if(frase.includes("cachorro")){

  console.log('Achei a Palavra Cachorro neste Frase');

}else
  console.log("Não achei o cachorro");


// usando includes, verifique se a frase contém a palavra 'amanhã'
if(frase.includes("amanhã")){

  console.log('Achei a Palavra Amanhã neste Frase');

}else
  console.log("Não achei o amanhã");


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
if(arrayExercicio.includes("banana")){

  console.log('Tem Banana Aqui');

}else
  console.log("Não achei a Banana");


// usando includes, verifique se a array contém a palavra 'figo'  
if(arrayExercicio.includes("figo")){

  console.log('Tem Figo aqui');

}else
  console.log("Não achei o Figo");

// usando includes, verifique se a array contém a palavra 'macarrão'
if(arrayExercicio.includes("macarrão")){

  console.log('Tem macarrão aqui');

}else
  console.log("Não achei o Macarrão");