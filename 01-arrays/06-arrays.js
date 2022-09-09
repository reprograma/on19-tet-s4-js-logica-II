// Print what the comments ask for

const sentence = "I am a sentence with a few words";

// using replace, change 'am' to 'not'
const swap = sentence.replace("I am", "I am not");
console.log(swap)

// using replace, replace 'some' with 'few'
const swap2 = sentence.replace("some", "few");
console.log("\n", swap2);

// using replace, change 'I' to 'Ieu mema'
const swap3 = sentence.replace("I", "Ieu mema");
console.log("\n", swap3);

// using replaceAll replace all letters a with -
const swap4 = sentence.replaceAll("a", "-");
console.log("\n", swap4);

// use replace with regex to replace all letters a with -
const swap5 = sentence.replace(/a/gi, "-");
console.log("\n", swap5);