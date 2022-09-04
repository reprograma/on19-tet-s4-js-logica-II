console.clear()

// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
// usando includes, verifique se a frase contém a palavra 'algumas'
// usando includes, verifique se a frase contém a palavra 'cachorro'
// usando includes, verifique se a frase contém a palavra 'amanhã'
const verificaPalavra = (frase, valor) => {
  const temPalavra = frase.includes(valor)
  console.log(`Contém a palavra ${valor}? Resposta: ${temPalavra}`)
}
verificaPalavra(frase, 'sou')
verificaPalavra(frase, 'algumas')
verificaPalavra(frase, 'cachorro')
verificaPalavra(frase, 'amanhã')

console.log("")

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
// usando includes, verifique se a array contém a palavra 'figo'
// usando includes, verifique se a array contém a palavra 'macarrão'

verificaPalavra(arrayExercicio, 'banana')
verificaPalavra(arrayExercicio, 'figo')
verificaPalavra(arrayExercicio, 'macarrão')