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
<<<<<<< HEAD
=======
  },
  saudar: () => {
    //console.log(this.); <== não tem this na arrow function
>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
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
<<<<<<< HEAD
=======

pessoa.saudar()


>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
