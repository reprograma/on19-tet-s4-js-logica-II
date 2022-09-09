// using split turn the sentence into an array and put each word
// with the first letter capitalized, join it again in a sentence, and print
console.clear();

const sentence = "I am a sentence with a few words";

const newArray = sentence.split(' ');
const UpperCase = newArray
.map((item) => item[0].toUpperCase() + item.slice(1))
.join(" ");
console.log(UpperCase);