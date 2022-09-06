console.clear();
//concatenar e spread

const array1 = ["Uno", "Fusca", "Porche"];
const array2 = ["Brasilia", "Palio"];

const juntado = array1.concat(array2);
console.log(juntado);

const juntaSpread = [...array2, ...array1, ...array2];
console.log("\n", juntaSpread);
