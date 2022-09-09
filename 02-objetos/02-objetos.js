console.clear();

const person = {
   name: "Fulana",
   age: 41,
   height: 1.74,
   temCNH: true,
   nicknames: ["Fu", "Ful", "Lana"],
   present: function () { console.log(`Hello, my name is ${this.name}`) }
};


// print Hello, my name is Fulana, using the object method
person.present();