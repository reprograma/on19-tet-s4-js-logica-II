// Imprima o que for pedido nos comentários

const frase = 'Eu sou uma frase com algumas palavras'

// usando indexOf, verifique o index de inicio da palavra 'sou'

console.log(frase.indexOf('sou')) // indice da palavra
console.log(frase.indexOf('s')) // indice das letras
console.log(frase.indexOf('o'))
console.log(frase.indexOf('u'))

// usando indexOf, verifique o index de inicio da palavra 'algumas'

console.log(frase.indexOf('algumas'))

// usando indexOf, verifique o index de inicio da palavra 'cachorro'

console.log(frase.indexOf('cachorros')) // deu -1, porque -1 não existe dentro do array

const arrayExercicio = [
  'banana',
  'pera',
  'uva',
  'maça',
  'figo',
  'abacaxi',
  'caviar'
]

// usando indexOf, verifique a posição da palavra 'banana'

let nomeDaFruta = 'banana'

let indexDaFruta = arrayExercicio.indexOf(nomeDaFruta)

console.log(`Achei na posição ${indexDaFruta} a palavra: ${nomeDaFruta}`)

// usando indexOf, verifique a posição da palavra 'figo'

let nomeDaFruta2 = 'figo'

let indexDaFruta2 = arrayExercicio.indexOf(nomeDaFruta2)

console.log(`Achei na posição ${indexDaFruta2} a palavra: ${nomeDaFruta2}`)

// usando indexOf, verifique a posição da palavra 'macarrão'

let nomeDaFruta3 = 'macarrão'

let indexDaFruta3 = arrayExercicio.indexOf(nomeDaFruta3)

console.log(`Achei na posição ${indexDaFruta3} a palavra: ${nomeDaFruta3}`) // achou na posição -1, posição que não existe 

