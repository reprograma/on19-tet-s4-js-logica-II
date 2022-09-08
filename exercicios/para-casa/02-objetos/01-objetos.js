const pessoa = {
  nome: "Aline",
  idade: 36,
  altura: 1.68,
  temCNH: true,
  apelidos: ["Line", "Li", "Lica"]
};

// imprima o nome da pessoa
console.log("Nome: ", pessoa.nome);

// imprima de maneira amigável se a pessoa possui CNH
if (pessoa['temCNH']) {
  console.log('Oba! Você tem CNH')
} else {
  console.log('Você não tem CNH')
} 

// imprima o último apelido da pessoa
console.log("apelidos: ", pessoa.apelidos[2])

// Troque o nome da pessoa e imprima, usando somente o objeto
console.log(pessoa['nome'] = 'Aline')

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa['gênero'] = 'feminino'
console.log(pessoa['gênero'])