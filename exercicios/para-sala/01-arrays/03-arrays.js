console.clear();

const frase = "Crimes of the Future. Available now at MUBI";

const findIndex = frase.indexOf("MUBI");
console.log(findIndex, frase[findIndex]);

const fruitsList = ["Watermelon", "Blueberry", "Apple"];
const fruitIndex = fruitsList.indexOf("Blueberry");

if (fruitIndex > -1) {
    console.log(`I found ${fruitsList[fruitIndex]} in the position ${fruitIndex}.`);
} else {
    console.log("Could not find")
}