const pessoa = {
  nome: "Gabrielli",
  idade: 29,
  altura: 1.57,
  temCNH: true,
  apelidos: ["Gabi", "Gabe", "Bia"],
  apresentar: function () { console.log(`Olá, meu nome é ${this.nome}`) }
};

// imprima Olá, meu nome é Fulana, usando o método do objeto
 
pessoa.apresentar();
