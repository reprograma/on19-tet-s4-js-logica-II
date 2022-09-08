const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando for of, imprima todos os item da array um por um
const favorita = "caviar";
const nova = [];

for (const fruta of arrayExercicio) {
  if (fruta == favorita) {
    console.log(fruta + " não é fruta ");
  } else {
    console.log(fruta);
  }

}