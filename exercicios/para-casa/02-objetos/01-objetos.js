const pessoa = {
  nome: 'Fulana',
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ['Fu', 'Ful', 'Lana']
}

// imprima o nome da pessoa
console.log(pessoa.nome)

// imprima de maneira amigável se a pessoa possui CNH
mensagem = 'Você tem CNH'
if (pessoa.temCNH == true) {
  console.log(mensagem)
}

// imprima o último apelido da pessoa
console.log(pessoa.apelidos[2])

// Troque o nome da pessoa e imprima, usando somente o objeto
console.log(pessoa.nome.replace('Fulana', 'Janaína'))

// adicione uma nova propriedade chamada gênero com o valor 'feminino' e imprima, usando somente o objeto
let genero = (pessoa['genero'] = 'feminino')
console.log(pessoa.genero)
