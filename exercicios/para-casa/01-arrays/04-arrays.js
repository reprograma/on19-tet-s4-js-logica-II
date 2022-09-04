// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];
// usando indexOf, verifique o index de inicio da palavra 'sou'
const index1 = frase.indexOf("sou")
if (index1 >-1){ 
  console.log(`encontrei a palavra ${frase[index1]} na posição ${index1}`)
}else {
  console.log("Não encontrei a palavra em qualquer posição")
}
// usando indexOf, verifique o index de inicio da palavra 'algumas'
const index2 = frase.indexOf("algumas")
if (index2 >-1) { 
  console.log(`encontrei a palavra ${frase[index2]} na posição ${index2}`)
}else {
  console.log("Não encontrei a palavra em qualquer posição")
}

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const index3 = frase.indexOf("cachorro")
if (index3 >-1 ){ 
  console.log(`encontrei a palavra ${frase[index3]} na posição ${index3}`)
}else {
  console.log("Não encontrei a palavra em qualquer posição")
}


// usando indexOf, verifique a posição da palavra 'banana'
const index4 = arrayExercicio.indexOf("banana")
if (index4 >-1 ){ 
  console.log(`encontrei a palavra ${arrayExercicio[index4]} na posição ${index4}`)
}else {
  console.log("Não encontrei a palavra em qualquer posição")
}

// usando indexOf, verifique a posição da palavra 'figo'
const index5 = arrayExercicio.indexOf("figo")
if (index5 >-1 ){ 
  console.log(`encontrei a palavra ${arrayExercicio[index5]} na posição ${index5}`)
}else {
  console.log("Não encontrei a palavra em qualquer posição")
}

// usando indexOf, verifique a posição da palavra 'macarrão'
const index6 = arrayExercicio.indexOf("sou")
if (index6 >-1 ){ 
  console.log(`encontrei a palavra ${arrayExercicio[index6]} na posição ${index6}`)
}else {
  console.log("Não encontrei a palavra em qualquer posição")
}