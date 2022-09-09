// using map, convert all array items to uppercase first letter
console.clear();

const arrayExercise = [
   "banana",
   "pear",
   "grape",
   "apple",
   "fig",
   "pineapple",
   "caviar"
];


const newArray = arrayExercise.map((item) => (item[0].toUpperCase() + item.slice(1)));
console.log(newArray);