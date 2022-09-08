console.clear();

const frase = "Crimes of the Future. Available now at MUBI";
const sentenceSplit = frase.slice(14)

console.log("Starting position", frase.indexOf("Future")); //Shows the index (position of first character) of word
console.log("\nstring", sentenceSplit);

const fruitsList = ["Watermelon", "Blueberry", "Apple", "Dragonfruit", "Peach"];

const cutArray = fruitsList.slice(2);
console.log("\nSimple cut", fruitsList, cutArray);

const cutArray2 = fruitsList.slice(-2); //Starts from the end, counting backwards
console.log("\nNegative index", cutArray2)

const cutArray3 = fruitsList.slice(1,2); //Starts at position 1 and stops before 2
console.log("\nStop index", cutArray3);