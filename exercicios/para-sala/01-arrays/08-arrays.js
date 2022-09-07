console.clear();
//sort
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

function comparar(itemEsquerdo, itemDireito) {
  if (itemEsquerdo > itemDireito) {
    return -1;
  }
  if (itemDireito > itemEsquerdo) {
    return 1;
  }
  return 0;
}

const ordenado = listaFrutas.sort(comparar);
console.log(listaFrutas);
