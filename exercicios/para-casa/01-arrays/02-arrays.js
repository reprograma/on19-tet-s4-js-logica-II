// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);
console.clear();
const arrayExercicio = [
  "banana",   //0    -6
  "pera",     //1    -5
  "uva",      //2   -4
  "maça",     //3   -3
  "figo",     //4   -2
  "abacaxi",  //5  -1
  "caviar"    //6  -0
];

// Imprima o terceiro item da array e a primeira letra maiúscula
console.log( arrayExercicio[2] ) 

// Imprima o penúltimo item da array e a última letra maiúscula
console.log(arrayExercicio[5])

// Imprima o item do meio da array e a primeira e a última letras maiúscula
console.log(arrayExercicio[3])

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
console.log('Eu gosto mais de ', arrayExercicio[2].toUpperCase(), 'do que', arrayExercicio[4].toLocaleUpperCase())


