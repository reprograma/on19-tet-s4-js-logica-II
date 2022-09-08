const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando reduce, Some todos os números da array

const sum = arrNumeros.reduce((total,num) => total + num)
console.log(sum)


// Some todas os número pares (pode usar filter em conjunto ou apenas o reduce)

const Pairs = arrNumeros.filter((num) => num % 2 === 0)
console.log(Pairs)
const sumPairs = Pairs.reduce((total,num) => total + num)
console.log(sumPairs)


const arrObjetos = [
  {
    nome: "Maria",
    idade: 21
  },
  {
    nome: "Josefa",
    idade: 12
  },
  {
    nome: "Clementina",
    idade: 55
  },
  {
    nome: "Gustava",
    idade: 14
  },
  {
    nome: "Chablana",
    idade: 33
  }
];

// Some todas as idades das pessoas do objeto acima
let total
const sumIdade = arrObjetos.reduce((num) => total + num.idade)
console.log(sumIdade)

// Some todas as idades das pessoas menores de idade
