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
let listaFrutas1 = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];
listaFrutas1.sort((a, b) => {
  if (a > b ) 
    return -1;
  if (a < b)
    return 1;
  return 0;
});
console.log(listaFrutas1);
// coloque a array em ordem alfabética


// coloque a array em ordem alfabética decrescente z -> a
