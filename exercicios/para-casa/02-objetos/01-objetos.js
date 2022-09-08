const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// imprima o nome da pessoa
console.log(pessoa.nome)

// imprima de maneira amigável se a pessoa possui CNH
if (pessoa.temCNH === true) {
  console.log("Parabens, você possui CNH")
}else {
  console.log("Poxa, não possui CNH")
}

// imprima o último apelido da pessoa
console.log(pessoa.apelidos [2])

// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome = "Marcela"
console.log(pessoa.nome)
// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
