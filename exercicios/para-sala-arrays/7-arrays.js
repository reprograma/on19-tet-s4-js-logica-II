

console.clear();
//splice
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

const resultado = listaFrutas.slice(2, 1);
console.log("Comeu: ", resultado);
console.log("Sobrou: ", listaFrutas);

listaFrutas.slice(2, 0, "Uva");
console.log("Sobrou: ", listaFrutas);