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
if (pessoa.temCNH = true){
  console.log("Possui CNH")
} else {
  console.log("não possui CNH")
}

// imprima o último apelido da pessoa
Console.log(pessoa.apelido[2])

// Troque o nome da pessoa e imprima, usando somente o objeto
console.log(pessoa['nome'] = 'lari')

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa['gênero'] = 'feminino'
console.log(pessoa['gênero'])