// Imprima o que for pedido nos comentários

const frase = 'Eu sou uma frase com algumas palavras'

// Usando slice, corte da frase a palavra 'frase'

let fraseCortada = frase.slice(11,17)
console.log(fraseCortada)

// Usando slice, corte da frase a palavra 'algumas'

let fraseCortada2 = frase.slice(21,29)
console.log(fraseCortada2)

// Usando slice, corte da frase as frase 'algumas palavras'

let fraseCortada3 = frase.slice(21, 37)
console.log(fraseCortada3)


// Usando slice, corte da frase a palavra 'frase'

let fraseCortada4 = frase.slice(11,17)
console.log(fraseCortada4)

// Faça o mesmo dos exercícios acima usando substring

const arrayExercicio = [
  'banana',
  'pera',
  'uva',
  'maça',
  'figo',
  'abacaxi',
  'caviar'
]

// Usando slice, colete um pedaço da array do segundo item em diante

let cortaArray1 = arrayExercicio.slice(1);
console.log(cortaArray1);

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item

let cortaArray2 = arrayExercicio.slice(2, 5)
console.log(cortaArray2)

// Usando slice, colete um pedaço da array: os dois últimos itens

let cortaArray3 = arrayExercicio.slice(5)
console.log(cortaArray3)
