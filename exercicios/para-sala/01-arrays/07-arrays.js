console.clear();

const fruitsList = ["Watermelon", "Blueberry", "Apple", "Dragonfruit", "Peach"];
const fruitsList2 = ["Watermelon", "Blueberry", "Apple", "Dragonfruit", "Peach"];
const fruitsList3 = ["Watermelon", "Blueberry", "Apple", "Dragonfruit", "Peach"];


const spliced = fruitsList.splice(2);
const spliced2 = fruitsList2.splice(2, 1); //First number indicates where to start, second one is how much how be removed
const spliced3 = fruitsList3.splice(2, 0, "Strawberry"); //Inserts or swaps items in the array const spliced3 = fruitsList3.splice(2, 1, "Strawberry");

console.log(spliced); //This line is printing what was REMOVED
console.log(spliced2); //Same
console.log(fruitsList);
console.log(fruitsList2);
console.log(fruitsList3);