console.clear();

const person = {
   name: "Fulana",
   age: 41,
   height: 1.74,
   temCNH: true,
   nicknames: ["Fu", "Ful", "Lana"]
};

//using for in, print all properties and their values one by one.
for (const i in person) {
   console.log([i], person[i]);
}