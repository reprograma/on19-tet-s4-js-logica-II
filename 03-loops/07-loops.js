// using map, add a sequential number for each item,
//ex: 1 - banana, 2 - pear 3- grape ...
console.clear();

const arrayExercicio = [
   "banana",
   "pear",
   "grape",
   "apple",
   "fig",
   "pineapple",
   "caviar"
];

const index = (fruit, i) => {
   const result = `${i+1} - ${fruit}`;
   return result;
}

const mapped = arrayExercicio.map(index);
console.log(mapped);