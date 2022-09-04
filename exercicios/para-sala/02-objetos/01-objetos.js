<<<<<<< HEAD
console.clear()
//objetos

const pessoa = {
    nome: "Pâm",
    idade: 35,
    temCnh: true,
    hobbies: ["Séries", "Brejas"],
    carro: {
        marca: "peugeot",
        nome: "207 passion",
        motor: {
            potencia: 200,
            combustivel: "gasolina"
        }
    },
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. ,eu primeiro hobby é ${this.hobbies[0]}`)
    },
    saudar: () => {
       // console.log(this.); <== não tem this na arrow function } }
    }

}

pessoa.apresentar()

console.log("Nome: ", pessoa.nome)

pessoa.hobbies.push("Codar")
console.log("Hobby: ", pessoa.hobbies[pessoa.hobbies.length - 1])

pessoa.carro.motor.potencia += 50 
console.log(pessoa.carro.motor)
=======
console.clear();
// Objetos

const pessoa = {
  nome: "Giu",
  idade: 42,
  temCNH: true,
  hobbies: ["Séries", "Games"],
  carro: {
    marca: "fiat",
    nome: "Palio",
    motor: {
      potencia: 100,
      combustivel: "gasolina"
    }
  },
  apresentar: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. E meu primeiro hobby é ${this.hobbies[0]}`);
  },
  saudar: () => {
    //console.log(this.); <== não tem this na arrow function
  }
}

pessoa.apresentar();

console.log("Nome: ", pessoa.nome);

pessoa.hobbies.push("Codar");
console.log("Hobby: ", pessoa.hobbies);

pessoa.carro.motor.potencia += 50;
console.log(pessoa.carro.motor);

pessoa.moto = {
  potencia: 80,
  combustivel: "Álcool"
}

console.log(pessoa);

pessoa.saudar()


>>>>>>> c1bd3cbe04b8629af86880ff7c3cafd420ee2519
