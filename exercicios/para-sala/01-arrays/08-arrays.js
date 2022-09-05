<<<<<<< HEAD
console.clear()
    const listaFrutas = [
        "banana", 
        "Manga", 
        "Maça", 
        "Pera",
        "Abacaxi"
      
      ]

      function comparar(a, b) {
        if (a > b) {
            return -1
        }
        if (b > a) {
            return 1
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
>>>>>>> 92378f8ad91f93246f06241636365ec06194fcdb
