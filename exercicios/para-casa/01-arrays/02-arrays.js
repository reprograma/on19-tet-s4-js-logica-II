console.clear()

// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Imprima o terceiro item da array e a primeira letra maiúscula
const mapeado = arrayExercicio.map(fruta => fruta[0].toUpperCase() + fruta.slice(1))
const resultado = mapeado[2]
console.log(resultado)
// Imprima o penúltimo item da array e a última letra maiúscula
const abacaxi = arrayExercicio.slice(5, 6).toString()
const ultimaLetra = abacaxi.split("")[abacaxi.length -1].toUpperCase()
const palavra = abacaxi.replace("i", ultimaLetra)
console.log(palavra)
// Imprima o item do meio da array e a primeira e a última letras maiúscula
const selecionaMaca = arrayExercicio.slice(3, 4).toString()
const primeiraMaiuscula = selecionaMaca[0].toUpperCase()
const trocaPrimeiraLetra = selecionaMaca.replace('m', primeiraMaiuscula)

const ultimaLetraMaiuscula = selecionaMaca.split('')[selecionaMaca.length - 1].toUpperCase()
const trocaUltimaLetra = trocaPrimeiraLetra.replace(/.$/, ultimaLetraMaiuscula)
console.log(trocaUltimaLetra)

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
const pegaFigo = arrayExercicio.slice(4, 5).toString()
const separaFigo = pegaFigo.replace('go', 'GO')
console.log(`Eu gosto mais de ${arrayExercicio[2].toUpperCase()} do que ${separaFigo}`)

