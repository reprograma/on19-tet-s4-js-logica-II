const pessoa = {
  nome: "Luciana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lu"]
};

// imprima o nome da pessoa
console.log("Nome :", pessoa.nome)


// imprima de maneira amigável se a pessoa possui CNH

console.log("O nome da pessoa é "  + pessoa.nome +  ", ela possue CNH? ")

// imprima o último apelido da pessoa
console.log(pessoa.apelidos[2]);

// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome = "Rob"
console.log("Nome: ", pessoa.nome);

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero = "Feminino"
console.log ("Genero:", pessoa.genero)