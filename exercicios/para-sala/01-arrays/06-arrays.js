console.clear();

const frase = "Crimes of the Future. Available now at MUBI";

const splitArray = frase.split("");
console.log(splitArray);

const splitArray2 = frase.split(" ");
console.log(splitArray2);

const splitArray3 = frase.split(" of ");
console.log(splitArray3);

const joinArray = splitArray2.join(" ");
console.log(joinArray);

const mapping = splitArray2.map(
    (item) => item[0].toLocaleUpperCase() + item.slice(1) //"item" can be named anything, it's what's receiving the content that will be processed
);

const mapping2 = splitArray2
.map((item) => item[0].toLocaleUpperCase() + item.slice(1))
.join(" ");
console.log(mapping2)
