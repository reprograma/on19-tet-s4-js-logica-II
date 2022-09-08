// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

console.clear();
const arrayExercicio = ["Banana", "Pera", "Uva", "Maça", "Figo", "Abacaxi", "Caviar"];

// Imprima o segundo item da array
console.log("Segundo item: ", arrayExercicio[1])

// Imprima o último item da array
const sliceCut = arrayExercicio.slice(-1)
console.log("\nÚltimo item: ", sliceCut[0])


// Imprima o item do meio da array
const average = (arrayExercicio.length) /2
console.log("\nItem do meio: ", arrayExercicio[parseInt(average)])

// Imprima "Eu gosto mais de banana do que figo" usando a array no lugar das frutas
console.log(`\nEu gosto mais de ${arrayExercicio[0]} do que ${arrayExercicio[4]}.`)

// Imprima o item que não é uma fruta
const indexArray = arrayExercicio.indexOf("Caviar");

if (indexArray > -1) {
    console.log(`\nO item na posição ${indexArray} não é uma fruta, pois é ${arrayExercicio[indexArray]}.`);}