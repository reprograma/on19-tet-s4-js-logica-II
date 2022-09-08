console.clear();

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
const fraseModificada = arrayExercicio.reverse();
console.log("ordem reversa " + fraseModificada)

// coloque a array em ordem alfabética
const ordemalfabetica = arrayExercicio.sort()
console.log("ordem alfabetica " + ordemalfabetica)

// coloque a array em ordem alfabética decrescente z -> a
const ordem = arrayExercicio.sort().reverse();
console.log("ordem alfabetica decrescente " + ordem)