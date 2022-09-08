console.clear();
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi",
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi",
];

const nova = [];

for (const fruta of listaFrutas) {
  if (fruta[0] === "M") {
    nova.push(fruta)
  }
}
console.log("Achei essas com letra M " + nova);
console.log(nova)
console.log(listaFrutas)