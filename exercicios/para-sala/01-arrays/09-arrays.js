console.clear()
//concatenar e spread

const array1 = ["Uno", "Fusca", "Tiggo"]
const array2 = ["Toro", "Range Rover"]

const juntado = array1.concat(array2)
console.log(juntado)

const juntaSpread = [...array2, ...array1]
console.log("\n", juntaSpread)