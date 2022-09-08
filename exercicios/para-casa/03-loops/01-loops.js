
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando while, imprima todos os item da array um por um

var contador = 0;

while (contador < arrayExercicio.length) {
  console.log(arrayExercicio[contador])
  contador++;
}

console.log(contador);