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
const upperCase = arrayExercicio[2].replace("u", "U");

console.log("\nTerceiro item: ", upperCase);

const upperCaseAlt = //With map we create a new array, it is populated with the results of the upper case function PLUS slice
arrayExercicio.map((item) => item[0].toUpperCase(0) //If we stop here it will create an array of only the first letters from each word, already in upper case
 + item.slice(1)); //Slice is taking each ITEM (in this case, words) and removing the first letter before adding with the single upper case letter from before

console.log("\nTerceiro item, alternativo: ",upperCaseAlt[2]);

// Imprima o penúltimo item da array e a última letra maiúscula
const upperCase2 = arrayExercicio[5].replace("i", "I"); 
console.log("\nPenúltimo item: ", upperCase2);

// Imprima o item do meio da array e a primeira e a última letras maiúscula
const upperCase3 = arrayExercicio.map((item) => item.replace("maça", "MaçA"))
   console.log("\nItem do meio: ", upperCase3[3])


// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
   const upperCase4 = arrayExercicio.map((item) => (item.replace("uva", "UVA") 
   .replace("figo", "fiGO")));
   console.log(`\nEu gosto mais de ${upperCase4[2]} do que ${upperCase4[4]}.`);


console.log(`\nEu gosto mais de ${arrayExercicio[2].toUpperCase()} do que
${arrayExercicio[4][0]+arrayExercicio[4][1]+arrayExercicio[4][2].toUpperCase()+arrayExercicio[4][3].toUpperCase()}.`);
