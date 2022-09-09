// create a loop however you like that counts how many letters 'a' there are in the sentence and print.
console.clear();

const sentence = "I am a sentence with aaaaaaa few words";

let count = 0;
for (let index = 0; index < sentence.length; index++) {
     if (sentence[index] === "a") {
         count++;
     }
}
console.log(`The total number of letters "a" is equal to ${count}.`);