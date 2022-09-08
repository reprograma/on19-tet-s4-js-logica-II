const pessoa = {
  nome: "Lydianne",
  idade: 33,
  altura: 1.60,
  temCNH: false,
  apelidos: ["Ly", "Anne", "Lydia"],
  apresentar: function () { console.log(`Olá, meu nome é ${this.nome}`) }
};

// imprima Olá, meu nome é Fulana, usando o método do objeto
 
pessoa.apresentar();
