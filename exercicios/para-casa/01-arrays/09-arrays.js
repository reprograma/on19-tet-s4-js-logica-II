const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// inverta a ordem da array com .reverse()
console.log(arrayExercicio.reverse());


// coloque a array em ordem alfabética
function comparar(itemEsquerdo, itemDireito) {
  if (itemDireito > itemEsquerdo) {
    return -1;
  }
  if (itemEsquerdo > itemDireito) {
    return 1;
  }
  return 0;
}

const ordenaLista = arrayExercicio.sort(comparar);
console.log(arrayExercicio);


// coloque a array em ordem alfabética decrescente z -> a
function comparar2(itemEsquerdo, itemDireito) {
  if (itemEsquerdo > itemDireito) {
    return -1;
  }
  if (itemDireito> itemEsquerdo) {
    return 1;
  }
  return 0;
}

const ordenaLista2 = arrayExercicio.sort(comparar2);
console.log(arrayExercicio);