console.clear();

const array1 = ["Gabriel", "Muriel", "Samael"];
const array2 = ["Michael", "Raphael"];

const combine = array1.concat(array2);
console.log(combine);

const combineSpread = [...array1, ...array2];
console.log("\n", combineSpread);