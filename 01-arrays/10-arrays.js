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


//using splice, replace grape with carrot
const arrayExercise2 = [...arrayExercise];
arrayExercise2.splice(2, 1, "carrot");
console.log(arrayExercise2);


//using splice, replace fig with onion
const arrayExercise3 = [...arrayExercise];
arrayExercise3.splice(4, 1, "onion");
console.log(arrayExercise3);


//using splice, remove pineapple
const arrayExercise4 = [...arrayExercise];
arrayExercise4.splice(5, 1);
console.log(arrayExercise4);