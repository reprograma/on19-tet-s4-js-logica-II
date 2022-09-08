const pessoa = {
  nome: "Rafa",
  idade: 22,
  altura: 1.75,
  temCNH: true,
  apelidos: ["beckynha", "xota", "Beck"]
};

// imprima o nome da pessoa
console.log("Nome: ", pessoa.nome);

// imprima de maneira amigável se a pessoa possui CNH
console.log("Meu nome é " + pessoa.nome + " se eu possuo CNH ? " + pessoa.temCNH);

// imprima o último apelido da pessoa
console.log(pessoa.apelidos[2]);

// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome = "Rafa"
console.log("Nome: ", pessoa.nome);

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero = "Feminino"
console.log ("Genero:", pessoa.genero);
