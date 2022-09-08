// Imprima o que for pedido nos comentários

const frase = 'Eu sou uma frase com algumas palavras'

// usando includes, verifique se a frase contém a palavra 'sou'

let palavraBuscada = 'sou'
if (frase.includes(palavraBuscada)) {
  console.log('Eu sou uma frase que tem a palavra: ', palavraBuscada)
} else {
  console.log('Eu sou uma frase que não tem a palavra ', palavraBuscada)
}

// usando includes, verifique se a frase contém a palavra 'algumas'

let palavraBuscada2 = 'algumas'

if (frase.includes(palavraBuscada2)) {
  console.log('Eu sou uma frase que tem a palavra: ', palavraBuscada2)
} else {
  console.log('Eu sou uma frase que não tem a palavra: ', palavraBuscada2)
}

// usando includes, verifique se a frase contém a palavra 'cachorro'

let palavraBuscada3 = 'cachorro'

if (frase.includes(palavraBuscada3)) {
  console.log('Eu sou uma frase que tem a palavra: ', palavraBuscada3)
} else {
  console.log('Eu sou uma frase que não tem a palavra: ', palavraBuscada3)
}

// usando includes, verifique se a frase contém a palavra 'amanhã'

let palavraBuscada4 = 'amanhã'

if (frase.includes(palavraBuscada4)) {
  console.log('Eu sou uma frase que tem a palavra: ', palavraBuscada4)
} else {
  console.log('Eu sou uma frase que não tem a palavra: ', palavraBuscada4)
}

const arrayExercicio = [
  'banana',
  'pera',
  'uva',
  'maça',
  'figo',
  'abacaxi',
  'caviar'
]

// usando includes, verifique se a array contém a palavra 'banana'

const palavraBuscadaArray1 = arrayExercicio.includes('banana')

if (palavraBuscadaArray1) {
  console.log('Achei')
} else {
  console.log('Não achei')
}
// usando includes, verifique se a array contém a palavra 'figo'

const palavraBuscadaArray2 = arrayExercicio.includes('figo')

if (palavraBuscadaArray2) {
  console.log('Achei')
} else {
  console.log('Não achei')
}

// usando includes, verifique se a array contém a palavra 'macarrão'

const palavraBuscadaArray3 = arrayExercicio.includes('macarrão')

if (palavraBuscadaArray3) {
  console.log('Achei')
} else {
  console.log('Não achei')
}
