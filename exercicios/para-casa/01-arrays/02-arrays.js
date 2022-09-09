// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

console.clear();

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
console.log(arrayExercicio[2].charAt(0).toUpperCase() + arrayExercicio[2].slice(1));

// Imprima o penúltimo item da array e a última letra maiúscula
console.log(arrayExercicio[5].slice(0,6) + arrayExercicio[5].charAt(6).toUpperCase());

// Imprima o item do meio da array e a primeira e a última letras maiúscula
console.log(arrayExercicio[3].charAt(0).toUpperCase() + arrayExercicio[3].slice(1,3) + arrayExercicio[3].charAt(3).toUpperCase());

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
console.log("Eu gosto mais de " + arrayExercicio[2].toUpperCase() + " do que " + arrayExercicio[4].slice(0,2) + arrayExercicio[4].slice(2).toUpperCase())