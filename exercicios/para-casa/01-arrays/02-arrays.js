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
const trocaLetra = arrayExercicio[2].replace("u","U");
console.log('Terceiro item do array:', trocaLetra);


// Imprima o penúltimo item da array e a última letra maiúscula
const trocaLetra1 = arrayExercicio[5].replace("i","I");
console.log('Penúltimo item do array:', trocaLetra1);


// Imprima o item do meio da array e a primeira e a última letras maiúscula
const trocaLetraA = arrayExercicio[3].replace(/.$/, 'A');
const trocaLetraM = trocaLetraA.replace("m","M")
console.log('Item do meio do array:', trocaLetraM);



// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
const trocaUva = arrayExercicio[2].toLocaleUpperCase();
const trocaLetraFigo = arrayExercicio[4].replace("go","GO");
console.log('Eu gosto mais de', trocaUva, 'do que', trocaLetraFigo);