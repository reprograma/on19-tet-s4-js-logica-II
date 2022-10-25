// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
const verificaSou = frase.includes("sou");
if (verificaSou){
  console.log('Contém a palavra "sou"', verificaSou);
}else{
  console.log('Não contém a palavra "sou"');
}

// usando includes, verifique se a frase contém a palavra 'algumas'
const verificaAlgumas = frase.includes("algumas");
if (verificaAlgumas){
  console.log('Contém a palavra "algumas"', verificaAlgumas);
}else{
  console.log('Não contém a palavra "algumas"');
}

// usando includes, verifique se a frase contém a palavra 'cachorro'
const verificaCachorro = frase.includes("cachorro");
if (verificaCachorro){
  console.log('Contém a palavra "cachorro"', verificaCachorro);
}else{
  console.log('Não contém a palavra "cachorro"', verificaCachorro);
}


// usando includes, verifique se a frase contém a palavra 'amanhã'
const verificaAmanhã = frase.includes("amanhã");
if (verificaAmanhã){
  console.log('Contém a palavra "amanhã"', verificaAmanhã);
}else{
  console.log('Não contém a palavra "amanhã"', verificaAmanhã);
}

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
const verificaBanana = arrayExercicio.includes("banana");
if (verificaBanana){
  console.log('\nContém a palavra "banana"', verificaBanana);
}else{
  console.log('\nNão contém a palavra "banana"', verificaBanana);
}

// usando includes, verifique se a array contém a palavra 'figo'
const verificaFigo = arrayExercicio.includes("figo");
if (verificaFigo){
  console.log('Contém a palavra "figo"', verificaFigo);
}else{
  console.log('Não contém a palavra "figo"', verificaFigo);
}

// usando includes, verifique se a array contém a palavra 'macarrão'
const verificaMacarrao = arrayExercicio.includes("macarrão");
if (verificaMacarrao){
  console.log('Contém a palavra "macarrão"', verificaMacarrao);
}else{
  console.log('Não contém a palavra "macarrão"', verificaMacarrao);
}