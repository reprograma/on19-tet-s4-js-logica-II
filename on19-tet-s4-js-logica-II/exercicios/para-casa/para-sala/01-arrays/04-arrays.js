console.clear();
const frase = "Eu sou uma frase com algumas palavras";

const strCortada = frase.slice(7);
console.log("string", strCortada);

const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

// Cortando arrays
const arrayCortada = listaFrutas.slice(1);
console.log("\nÍndice positivo", arrayCortada);

const arrayCortada2 = listaFrutas.slice(-4);
console.log("\nÍndice negativo", arrayCortada2);

const arrayCortada3 = listaFrutas.slice(2, 4);
console.log("\nposição parada", arrayCortada3);
