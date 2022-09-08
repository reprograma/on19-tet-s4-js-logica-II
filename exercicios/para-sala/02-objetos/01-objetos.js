console.clear();

const person = {
    name: "Laura",
    age: 27,
    canDrive: true,
    hobbies: ["Gaming", "Reading", "Getting tattos"],
    tattoos: {
        leftArm: "statue",
        rightArm: ["Venus", "Floral", "Tomie"],
        rightLeg: "MCR", 
    },
    present: function () { 
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

person.present();

console.log("Name: ", person.name);
