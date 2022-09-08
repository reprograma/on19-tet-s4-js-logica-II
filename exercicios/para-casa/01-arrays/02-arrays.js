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
console.log(arrayExercicio[2]);
const maiuscula = arrayExercicio[2].replace("u","U");
console.log(maiuscula);

// Imprima o penúltimo item da array e a última letra maiúscula
console.log(arrayExercicio[5]);
const maiuscula2 = arrayExercicio[5].replace("i","I");
console.log(maiuscula2);


// Imprima o item do meio da array e a primeira e a última letras maiúscula
console.log(arrayExercicio[3]);
const maiuscula3 = arrayExercicio[3][0].replace("m","M") + arrayExercicio[3].slice(1,3) + arrayExercicio[3][3].replace("a","A") ;
console.log(maiuscula3);

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
console.clear();

const frase = "Eu gosto mais de uva do que figo";

const cortado = frase.split(" ");
console.log("Cortado: ", cortado);

