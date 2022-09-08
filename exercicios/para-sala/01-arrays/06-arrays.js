console.clear();
//split - join
const frase = "Eu sou uma frase com algumas palavras";

const picadoArray = frase.split(" ");
console.log("Picado: ", picadoArray);

const mapeado = picadoArray
  .map((palavra) => palavra[0].toLocaleUpperCase() + palavra.slice(1))
  .join(" ");

console.log("\nMapeado: ", mapeado);

const juntado = picadoArray.join(" ");
console.log("\nJuntado: ", juntado);
