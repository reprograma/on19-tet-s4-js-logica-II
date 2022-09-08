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
const fruta = arrayExercicio[2]
console.log(fruta[0].toUpperCase() + fruta.substr(1));

// Imprima o penúltimo item da array e a última letra minúscula
const abacaxi = arrayExercicio[5];
console.log(abacaxi.replaceAll("i", "I"));
// Imprima o item do meio da array e a primeira e a última letras maiúscula
const maca = arrayExercicio[3];
console.log(maca.replaceAll("maça", "MaçA"))

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
console.log(`Eu gosto mais de ${arrayExercicio[2].toLocaleUpperCase()} do que de ${arrayExercicio[4].replaceAll("go", "GO")}`)
