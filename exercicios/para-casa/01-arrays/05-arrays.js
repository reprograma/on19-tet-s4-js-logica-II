// Print what is requested in the comments

const sentence = "I am a phrase with a few words";

// Using slice, cut the word 'phrase' from the sentence
let count = sentence.indexOf("phrase"); //The command of these exercises seems to ask you to cut the word and REMOVE it, printing the sentence without it but studying slice
const cut = sentence.slice(count, count+5); //from the MDN it seems to be right that slice just cuts from that position forward
console.log(cut)

//If the objective was to remove only the word phrase, then it could be done as follows:
const cutAlt = sentence.slice(0, 11);
const cutAlt2 = sentence.slice(13)
console.log(cutAlt, cutAlt2)
// Using slice, cut the word 'some' from the sentence
let count2 = sentence.indexOf("some");
const cut2 = sentence.slice(count2, count2+7);
console.log(cut2);

// Using slice, cut the phrase 'a few words' from the sentence
let count3 = sentence.indexOf("some");
const cut3 = sentence.slice(count3, count3+16);
console.log(cut3);

// Using slice, cut the word 'phrase' from the sentence
// Do the same as above using substring
const cut4 = sentence.substring(count, count+5);
console.log(cut4);

const arrayExercicio = [
  "banana",
  "pear",
  "grape",
  "litter",
  "fig",
  "pineapple",
  "caviar"
];

// Using slice, collect a piece of the array from the second item onwards
const arrayCut = arrayExercicio.slice(1);
console.log(arrayCut);

// Using slice, collect a piece of the array between the third item and the fifth item
const arrayCut2 = arrayExercicio.slice(3, 4); //Between the third and fifth is just 4 or 3 TO 5??
console.log(arrayCut2);

// Using slice, collect a piece of the array: the last two items
const arrayCut3 = arrayExercicio.slice(5);
console.log(arrayCut3);