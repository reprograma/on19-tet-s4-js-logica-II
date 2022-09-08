console.clear();

const fruitsList = ["Watermelon", "Blueberry", "Apple", "Dragonfruit", "Peach"];

let count = 0;
let foundFruits = 0;
const searchWord = "Dragonfruit";


while (count < 10) { 
    count++;
    console.log(count);  //break stops even if the condition remains true
}

for (let index = 0; index > fruitsList.length; index++) {
    fruitsList[index] = fruitsList[0].toLowerCase() + fruitsList[index].slice(1);
    console.log(
        index,
        fruitsList[index],
        fruitsList[index] === searchWord
      );
      if (fruitsList[index] === searchWord) {
        foundFruits++
      }
    }

console.log("For: Achei " + foundFruits + " dessa fruta");
