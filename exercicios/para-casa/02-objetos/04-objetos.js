console.clear();

const person = {
   name: "Flana",
   age: 41,
   height: 1.74,
   temCNH: true,
   nicknames: ["Fu", "Ful", "Lana"]
};


// create a method on that object called EtariaRange,
// which will print if the person is young, adult or elderly
// being young up to exactly 18 years old, adulu up to exactly 64 years old and elderly above or equal to 65 years old
// ex: Hello, I'm a young person!
const AgeRange = (users) => {
   if (users.age <= 18) {
     console.log("This user is young.");
   } else if (users.age > 18 && users.age <= 64) {
     console.log("This user is an adult.");
   } else {
     console.log("This user is elderly.");
   }
}

AgeRange(person);

// change this object's person age to 77 and use the method you created to print its age range
AgeRange(person.age = 77);