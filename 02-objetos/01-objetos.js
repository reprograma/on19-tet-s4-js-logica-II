console.clear();

const person = {
   name: "Fulana",
   age: 41,
   height: 1.74,
   temCNH: true,
   nicknames: ["Fu", "Ful", "Lana"]
};

// print the person's name
console.log(person.name);

// print in a friendly way if the person has a driver's license
if (person.hasCNH === true) {
   console.log(`${person.name} has a driver's license, being able to drive nationwide.`)
} else {
   console.log(`${person.name} doesn't have a driver's license, and so, is not allowed to drive!`)
}

// print the person's last nickname
console.log(person.nicknames[2]);

// Change the person's name and print, using only the object
person.name = "Margareth";
console.log(person.name);

// add a new property called gender with the value 'feminine' and print, using only the object
person.gender = "Feminine";
console.log(person.gender);