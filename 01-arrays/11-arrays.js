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

// add n array a fruit using push
const arrayExercise2 = [...arrayExercise];
arrayExercise2.push("watermelon");
console.log(arrayExercise2);

// remove the last item from the array using pop
const arrayExercise3 = [...arrayExercise];
arrayExercise3.pop();
console.log(arrayExercise3);

// add a fruit to the beginning of the array using unshift
const arrayExercise4 = [...arrayExercise];
arrayExercise4.unshift("watermelon");
console.log(arrayExercise4);

// remove the first item from the array using shift
const arrayExercise5 = [...arrayExercise];
arrayExercise5.shift();
console.log(arrayExercise5);

// the resulting array must be the same as the initial
console.log(arrayExercise);