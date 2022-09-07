console.clear();
//splice
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

const resultado = listaFrutas.splice(2, 1);
console.log("Comeu: ", resultado);
console.log("Sobrou: ", listaFrutas);

listaFrutas.splice(2, 0, "Uva");
console.log("Sobrou: ", listaFrutas);

