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


//reverse array order with .reverse()
const reversed = [...arrayExercise].reverse(); //[...] can be used, to avoid making changes to the original array
console.log(reversed);


//array in alphabetical order
function compare(a, b) {
   if (a > b) {
       return 1;
   }
   if (b > a) {
       return -1;
   }
   return 0;
}

const order = [...arrayExercise].sort(compare);
console.log(order);

//sorted array in descending alphabetical order z -> a
function compare2(a, b) {
   if (a < b) {
       return 1;
   }
   if (b < a) {
       return -1;
   }
   return 0;
}

const order2 = [...arrayExercise].sort(compare2);
console.log(order2);