// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
// usando indexOf, verifique o index de inicio da palavra 'algumas'
// usando indexOf, verifique o index de inicio da palavra 'cachorro'


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
// usando indexOf, verifique a posição da palavra 'figo'
// usando indexOf, verifique a posição da palavra 'macarrão'

const acharIndice = (frase, valor) => {
  console.log(`O índice da palavra ${valor} é: ${frase.indexOf(valor)}`)
}

acharIndice(frase, 'sou')
acharIndice(frase, 'algumas')
acharIndice(frase, 'cachorro')
acharIndice(arrayExercicio, 'banana')
acharIndice(arrayExercicio, 'figo')
acharIndice(arrayExercicio, 'macarrão')