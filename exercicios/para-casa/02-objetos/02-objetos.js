const pessoa = {
  nome: "Adriane",
  idade: 36,
  altura: 1.55,
  temCNH: true,
  apelidos: ["Dri", "Adri", "Driane"],
  apresentar: function () { console.log(`Olá, meu nome é ${this.nome}`) }
};


// imprima Olá, meu nome é Adriane, usando o método do objeto

pessoa.apresentar();

// imprima Olá, meu nome é Fulana, usando o método do objeto
