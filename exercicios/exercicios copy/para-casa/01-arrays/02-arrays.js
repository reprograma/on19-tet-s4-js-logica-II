console.clear;

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
console.log("O terceiro item é", arrayExercicio[2].replaceAll("u", "U"));


// Imprima o penúltimo item da array e a última letra maiúscula

console.log("O penultimo item é", arrayExercicio[5].replace("i", "I"));


// Imprima o item do meio da array e a primeira e a última letras maiúscula
const fruta = arrayExercicio[3];
console.log(fruta.charAt(0,3).toUpperCase() + fruta.slice(1,3) + fruta.charAt(3).toUpperCase());


// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas

console.log(`Eu gosto mais de ${arrayExercicio[2].toUpperCase()} do que de ${arrayExercicio[4].replace("go","GO")}`);
