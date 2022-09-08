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

// inverta a ordem da array com reverse
arrayExercicio.reverse();
console.log(arrayExercicio);

// coloque a array em ordem alfabética
arrayExercicio.sort();
console.log(arrayExercicio);


// coloque a array em ordem alfabética decrescente z -> a

arrayExercicio.sort(function(a, b){return b-a});
console.log(arrayExercicio);
