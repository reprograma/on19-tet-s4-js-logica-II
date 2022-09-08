const pessoa = {
  nome: "Rafa",
  idade: 22,
  altura: 1.75,
  temCNH: true,
  apelidos: ["beckynha", "xota", "Beck"],
  apresentar: function () { console.log(`Olá, meu nome é ${this.nome}`) }
};


// imprima Olá, meu nome é Fulana, usando o método do objeto
pessoa.apresentar();