const arrNumeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

// Usando reduce, some todos os números da array
const soma = arrNumeros.reduce((anterior, atual) => (anterior += atual))
console.log(soma)

// Some todas os números pares (pode usar filter em conjunto ou apenas o reduce)
const somaPares = arrNumeros.reduce((num1, num2) =>
  num1 % 2 === 0 ? (num1 += num2) : (num1 += num2 % 2 === 0)
)
console.log(somaPares)

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

// Some todas as idades das pessoas do objeto acima
const somaIdades = arrObjetos.reduce(
  (iteradorIdade, idadeAtual) => (iteradorIdade += idadeAtual.idade),
  0
)
console.log(somaIdades)

// Some todas as idades das pessoas menores de idade
const novoArray = arrObjetos.filter(pessoa => pessoa.idade < 18)
const somaMenoresDeIdade = novoArray.reduce(
  (iteradorIdade, idadeAtual, i) => (iteradorIdade += idadeAtual.idade),
  0
)
console.log(somaMenoresDeIdade)
