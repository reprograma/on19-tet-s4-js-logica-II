

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