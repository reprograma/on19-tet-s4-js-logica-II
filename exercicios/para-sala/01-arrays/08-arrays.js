<<<<<<< HEAD
console.clear()
//sort
const listaFrutas = [
    "Banana",
    "Manga",
    "Maçã",
    "Pêra",
    "Abacaxi"
]

function comparar(a, b) {
    if (a > b) {
        return 1
    }
    if (b > a) {
        return -1
    }
    return 0
}

const ordenado = listaFrutas.sort(comparar)
console.log(listaFrutas)
=======
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
>>>>>>> c1bd3cbe04b8629af86880ff7c3cafd420ee2519
