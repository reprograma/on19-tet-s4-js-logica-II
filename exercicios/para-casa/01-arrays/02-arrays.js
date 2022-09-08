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
const trocado = arrayExercicio[2].replace("u" , "U" )
console.log(trocado)

// Imprima o penúltimo item da array e a última letra minúscula
const trocado2 = arrayExercicio[5].replace("i" , "I" )
console.log(trocado2)

// Imprima o item do meio da array e a primeira e a última letras maiúscula
const nome = arrayExercicio[3]
console.log(nome.charAt(0,3).toUpperCase() + nome.slice(1,3) + nome.charAt(3).toUpperCase());

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas

//console.log(`Eu gosto mais de`, (arrayExercicio[2].toUpperCase)., `do que de`, (arrayExercicio[4]));
//const nome2 = ( arrayExercicio[2].toUpperCase() + arrayExercicio[4].replace("g" , "G") 
//console.log(nome2)
console.log(`Eu gosto mais de ${arrayExercicio[2].toUpperCase()} do que de ${arrayExercicio[4].replace("go","GO")}`);
