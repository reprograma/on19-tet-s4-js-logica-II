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

console.log(arrayExercicio[2].replace(arrayExercicio[2][0], arrayExercicio[2][0].toUpperCase()))

// Imprima o penúltimo item da array e a última letra maiúscula

console.log(arrayExercicio[arrayExercicio.length -2].replace('i', 'I'))

// Imprima o item do meio da array e a primeira e a última letras maiúscula

const itemMeio = arrayExercicio[((arrayExercicio.length/2) - 1).toFixed(0)]

console.log(arrayExercicio[((arrayExercicio.length/2) - 1).toFixed(0)])

console.log(itemMeio.charAt(0).toUpperCase() + itemMeio.slice(1, itemMeio.length - 1) + itemMeio.charAt(itemMeio.length - 1).toUpperCase())


// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas


console.log(`Eu gosto mais de ${arrayExercicio[2].toUpperCase()} do que de ${arrayExercicio[4].slice(0, 2) + arrayExercicio[4].charAt(2).toUpperCase() + arrayExercicio[4].charAt(3).toUpperCase()}`)