const pessoa = {
  nome: 'Fulana',
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ['Fu', 'Ful', 'Lana']
}

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const k in pessoa) {
  if (Object.hasOwnProperty.call(pessoa, k)) {
    const element = pessoa[k]
    console.log(k, element)
  }
}
