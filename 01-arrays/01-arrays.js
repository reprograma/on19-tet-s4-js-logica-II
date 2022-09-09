// Print what is requested in the comments
// ex: print the first item in the array
// console.log(arraysEx[0]);

console.clear();
const arrayExercise = ["Banana", "Pear", "Grape", "Apple", "Fig", "Pineapple", "Caviar"];

// Print the second array item
console.log("Second item: ", arrayExercise[1])

// Print the last item in the array
const sliceCut = arrayExercise.slice(-1)
console.log("\nLast item: ", sliceCut[0])


// Print the middle item of the array
const average = (arrayExercise.length) /2
console.log("\nMiddle Item: ", arrayExercise[parseInt(average)])

// Print "I like bananas more than figs" using array instead of fruit
console.log(`\nI like ${arrayExercise[0]} more than ${arrayExercise[4]}.`)

// Print the item that is not a fruit
const indexArray = arrayExercise.indexOf("Caviar");

if (indexArray > -1) {
     console.log(`\n Item at position ${indexArray} is not a fruit, it is ${arrayExercise[indexArray]}.`);}