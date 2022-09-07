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

let contador = 0;
let frutasAchadas = 0;
const palavraProcurada = "Abacaxi";

//while
while (contador < listaFrutas.length) {
<<<<<<< HEAD
  contador++;
  if (listaFrutas[contador] === palavraProcurada) {
    frutasAchadas++
  }
=======
  if (listaFrutas[contador] === palavraProcurada) {
    frutasAchadas++
  }
  contador++;
>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
}

//console.log("While: Achei " + frutasAchadas + " dessa fruta");
frutasAchadas = 0;

//for de C
<<<<<<< HEAD
for (let index = 0; index < listaFrutas.length; index++) {
=======

for (let index = 0; index < listaFrutas.length; index++) {
  if (listaFrutas[index][0] === "M") {
    continue;
  }
>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
  listaFrutas[index] = listaFrutas[index][0].toLowerCase() + listaFrutas[index].slice(1);
  console.log(
    index,
    listaFrutas[index],
    listaFrutas[index] === palavraProcurada
  );
  if (listaFrutas[index] === palavraProcurada) {
    frutasAchadas++
  }
}

console.log("For: Achei " + frutasAchadas + " dessa fruta");
