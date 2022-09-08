const numbersList = [1, 2, 3, 4, 5];
numbersList[800] = "hidden"

const textList = ["Watermelon", "Blueberry", "Apple"];

const mixedList = [13, "Hello", true, undefined];

const objectsList = [{nome: "Laura"}, {nome: "Rocha"}];

const arraysList = [
    ["Sandman", "Morpheus"],
    ["Black","Red"]
];

console.log(mixedList[0]);
console.log("numbersList", numbersList.length)
console.log("objectsList", objectsList[0].nome);

console.log("arraysList", arraysList[0][1], arraysList[1])