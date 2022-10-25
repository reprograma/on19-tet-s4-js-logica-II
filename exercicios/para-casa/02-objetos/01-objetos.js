const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// imprima o nome da pessoa
console.log("Nome:", pessoa.nome);

// imprima de maneira amigável se a pessoa possui CNH
if (pessoa.temCNH === true){
  console.log(pessoa.nome, "possui CNH");
}else{
  console.log(pessoa.nome, "não possui CNH");
}

// imprima o último apelido da pessoa
console.log("Último apelido:", pessoa.apelidos[pessoa.apelidos.length -1]);


// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome = 'Shirlene'
console.log("Novo nome:", pessoa.nome)

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero ='feminino'

console.log('Gênero', pessoa.genero)
