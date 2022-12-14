const arrNumeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

// Usando filter, imprima apenas os números acima de 10
const maiorQue10 = arrNumeros.filter(numero => numero > 10)
console.log(maiorQue10)

// Usando filter, imprima apenas os números pares
const numerosPares = arrNumeros.filter(numero => numero % 2 === 0)
console.log(numerosPares)

const arrObjetos = [
  {
    nome: 'Maria',
    idade: 21
  },
  {
    nome: 'Josefa',
    idade: 12
  },
  {
    nome: 'Clementina',
    idade: 55
  },
  {
    nome: 'Gustava',
    idade: 14
  },
  {
    nome: 'Chablana',
    idade: 33
  }
]

// usando filter, imprima uma array só com os adultos
const adultos = arrObjetos.filter(pessoa => pessoa.idade >= 18)
console.log(adultos)

// usando filter, imprima apenas as pessoas cuja letra inicial do nome seja C
const iniciaComC = arrObjetos.filter(pessoa => pessoa.nome[0] === 'C')
console.log(iniciaComC)
