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
console.log(arrayExercicio.reverse());



// coloque a array em ordem alfabética
console.log(arrayExercicio.sort())
;
// coloque a array em ordem alfabética decrescente z -> a
arrayExercicio.sort((a,b) => {

if (a >b)

  return -1;

  if (a < b);

  return 1;

  return 0;



});

console.log(arrayExercicio);