console.clear();

const frase = "Crimes of the Future. Available now at MUBI";
 const swap = frase.replace("Available", "Showing");

console.log(swap);

const person = {
    naming: "Fulana",
    gender: "female"
}

const template = `Bem-vindo ${person.naming}`;
let result;
if (person.gender === "female") {
    result = template.replace("Bem-vindo", "Bem-vinda");
}
console.log("\n", result);

const swap2 = frase.replace(/a/gi, "A"); //Regex is the same as replaceAll but using a differet rule
//Regex is regular expression, in this case /a/, meaning the letter a wherever it appears. gi is global and ignoreCase flags
console.log("\n", swap2)

const swap3 = frase.replaceAll("a","A"); 
console.log("\n", swap3)