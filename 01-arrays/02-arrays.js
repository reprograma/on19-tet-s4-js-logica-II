// Print what is requested in the comments
// ex: print the first item in the array
// console.log(arraysEx[0]);
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

// Print the third item in the array and the first capital letter
const upperCase = arrayExercise[2].replace("u", "U");

console.log("\nThird item: ", upperCase);

const upperCaseAlt = //With map we create a new array, it is populated with the results of the upper case function PLUS slice
arrayExercise.map((item) => item[0].toUpperCase(0) //If we stop here it will create an array of only the first letters from each word, already in upper case
 + item.slice(1)); //Slice is taking each ITEM (in this case, words) and removing the first letter before adding with the single upper case letter from before

console.log("\nAlternative third item: ",upperCaseAlt[2]);

// Print the second to last item in the array and the last capital letter
const upperCase2 = arrayExercise[5].replace("i", "I");
console.log("\nPenultimate item: ", upperCase2);

// Print the middle item of the array and the first and last capital letters
const upperCase3 = arrayExercise.map((item) => item.replace("apple", "Apple"))
   console.log("\nMiddle Item: ", upperCase3[3])


// Print "I like UVA better than fiGO" using the array in place of the fruits and noting the capitals
   const upperCase4 = arrayExercise.map((item) => (item.replace("grape", "GRAPE")
   .replace("fig", "fiG")));
   console.log(`\nI like ${upperCase4[2]} more than ${upperCase4[4]}.`);