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
const reversed = [...arrayExercicio].reverse(); //[...] can be used, to avoid making changes to the original array
console.log(reversed);


// coloque a array em ordem alfabética
function compare(a, b) {
  if (a > b) {
      return 1;
  }
  if (b > a) {
      return -1;
  }
  return 0;
}

const order = [...arrayExercicio].sort(compare);
console.log(order);

// coloque a array em ordem alfabética decrescente z -> a
function compare2(a, b) { //Pay attention to properly renaming the function!! I was forgetting to create a second, different function, by adding 2
  if (a < b) {   //Both exercises had the same result because of it!!
      return 1;
  }
  if (b < a) {
      return -1;
  }
  return 0;
}

const order2 = [...arrayExercicio].sort(compare2);
console.log(order2);

