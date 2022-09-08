const pessoa = {
  nome: "Aline",
  idade: 36,
  altura: 1.68,
  temCNH: true,
  apelidos: ["Line", "Li", "Lica"],
  apresentar: function () { console.log(`Olá, meu nome é ${this.nome}`) }
};

// imprima Olá, meu nome é Fulana, usando o método do objeto
pessoa.apresentar();