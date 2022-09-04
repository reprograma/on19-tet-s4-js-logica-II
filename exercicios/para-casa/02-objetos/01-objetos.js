console.clear()

const pessoa = {
    nome: "Fulana",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Fu", "Ful", "Lana"]
};

// imprima o nome da pessoa
console.log(pessoa.nome)
console.log(pessoa['nome']) //outro modo de imprimir

// imprima de maneira amigável se a pessoa possui CNH
console.log(`A ${pessoa.nome} possui CNH?`)

pessoa.temCNH ? console.log('Possui sim.') : console.log('Não possui.')

// imprima o último apelido da pessoa
console.log(pessoa.apelidos[2])

// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome = 'Pâm'
console.log(pessoa)

// adicione uma noma propriedade chamada gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero = 'feminino'
console.log(pessoa)