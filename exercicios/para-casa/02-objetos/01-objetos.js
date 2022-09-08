console.clear();
const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// imprima o nome da pessoa
console.log("Nome: " + pessoa.nome);

// imprima de maneira amigável se a pessoa possui CNH
console.log(pessoa.nome + ", você tem CNH? " + pessoa.temCNH);

// imprima o último apelido da pessoa
console.log("Apelido: " + pessoa.apelidos[2]);

// Troque o nome da pessoa e imprima, usando somente o objeto
const trocando = pessoa.nome.replace ("Fulana", "Bianca")
console.log(trocando);

// adicione uma nova propriedade chamada gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero = "Feminino";
console.log("Gênero: " + pessoa.genero);


