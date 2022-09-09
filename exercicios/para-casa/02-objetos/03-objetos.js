console.clear();

const person = {
   name: "Fulana",
   age: 41,
   height: 1.74,
   temCNH: true,
   nicknames: ["Fu", "Ful", "Lana"]
};


// using your knowledge of loops, print all the person's nicknames one by one
for (index = 0; index < 3; index++) {
   console.log(person.nicknames[index]);
}