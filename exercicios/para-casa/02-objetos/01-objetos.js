const pessoa = {
  nome: 'Fulana',
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ['Fu', 'Ful', 'Lana']
}

// imprima o nome da pessoa

let nomeDaPessoa = pessoa.nome
console.log(nomeDaPessoa)

// imprima de maneira amigável se a pessoa possui CNH

let carteiraMotorista = pessoa.temCNH
console.log(carteiraMotorista)

if (pessoa.temCNH === true) {
  console.log(`${pessoa.nome} tem CNH! É a motorista da rodada!`)
} else {
  console.log('Vixi... vai ficar de passageiro')
}

// imprima o último apelido da pessoa

let ultimoApelido = pessoa.apelidos[2]
console.log(ultimoApelido)

// Troque o nome da pessoa e imprima, usando somente o objeto

let novoNome = (pessoa.nome = 'Mariana')
console.log(novoNome)

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto

pessoa.genero = {
  genero: 'feminino'
}

console.log(pessoa)
