// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
{
  const words = frase.split(" ")
  const index = words.indexOf("frase")
  const chopped = words [index]
  console.log (chopped)
}
// Usando slice, corte da frase a palavra 'algumas'
{
  const words = frase.split(" ")
  const index = words.indexOf("algumas")
  const chopped = words [index]
  console.log (chopped)
}
// Usando slice, corte da frase as frase 'algumas palavras'
{
  const words = frase.split(" ")
  const index1 = words.indexOf("algumas")
  const index2 = words.indexOf("palavras")
  const chopped = words [index1] + " " + words [index2]
  console.log (chopped)
}
// Usando slice, corte da frase a palavra 'frase'


// Faça o mesmo dos exercícios acima usando substring

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Usando slice, colete um pedaço da array do segundo item em diante
{
  const fruits = arrayExercicio.slice(1)
  console.log (fruits)
}
// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
{
  const fruits = arrayExercicio.slice(2, 5)
  console.log (fruits)
}
// Usando slice, colete um pedaço da array: os dois últimos itens
{
  const fruits = arrayExercicio.slice(-2)
  console.log (fruits)
}