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
console.log("\nImprima o terceiro item da array e a primeira letra maiúscula")
const resultado = arrayExercicio.splice(2, 1) 
console.log("O terceiro item da array é", resultado
.map((palavra) => palavra[0].toLocaleUpperCase() + palavra.slice(1)).join(" "))

// Imprima o penúltimo item da array e a última letra minúscula
console.log("\nImprima o penúltimo item da array e a última letra minúscula")
console.log(arrayExercicio[5])

// Imprima o item do meio da array e a primeira e a última letras maiúscula
console.log("\nImprima o item do meio da array e a primeira e a última letras maiúscula")
const fruta = arrayExercicio[3]
console.log(fruta.replace("maça", "MaçA"))

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
console.log("\nImprima Eu gosto mais de UVA do que fiGO usando a array no lugar das frutas e observando as maiúsculas")
console.log(`Eu gosto mais de ${arrayExercicio[2].toLocaleUpperCase()} do que de ${arrayExercicio[3].replaceAll("go", "GO")}`)