// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

const arrayExercicio = ["Banana", "Pera", "Uva", "Maça", "Figo", "Abacaxi", "Caviar"];

// Imprima o segundo item da array
console.log(arrayExercicio[1])

// Imprima o último item da array
const ultimoElemento = arrayExercicio.length -1
console.log(ultimoElemento)
console.log(arrayExercicio[ultimoElemento])

// Imprima o item do meio da array
console.log(arrayExercicio[3])

// Imprima "Eu gosto mais de banana do que figo" usando a array no lugar das frutas
console.log(`Eu gosto mais de ${arrayExercicio[0]} do que de ${arrayExercicio[4]}`);

// Imprima o item que não é uma fruta
const resultado = arrayExercicio.splice(6, 1) 
console.log(resultado, "não é uma fruta e por isso foi cortado da lista")
//outra forma que daria certo -> console.log(` ${arrayExercicio[6]} não é uma fruta e por isso foi excluido da lista`);