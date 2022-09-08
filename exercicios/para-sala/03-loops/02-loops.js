console.clear();

const fruitsList = ["Watermelon", "Blueberry", "Apple", "Dragonfruit", "Peach"];
const favorite = "Dragonfruit"

const mapping = 
    (fruta, index) => {
        const result = `${index + 1} - ${fruta}`;
        return result;
    }

const mapped = fruitsList.map(mapping);
console.log(mapped)

for (const fruit of fruitsList) {
    if (fruit === favorite) { 
        console.log("I like " + fruit)
    } else {
        console.log("I don't like " + fruit)
    }
}

const obj = {
name: "Laura",
age: 27,
planet: "Venus",
}

//console.log(obj["name"])
for (const key in obj) {
    console.log(obj["name"]);
}