const pessoa = {
  nome: 'Fulana',
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ['Fu', 'Ful', 'Lana']
}

// usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um
const apelidosPessoa = pessoa.apelidos
for (let i = 0; i < apelidosPessoa.length; i++) {
  console.log(apelidosPessoa[i])
}
