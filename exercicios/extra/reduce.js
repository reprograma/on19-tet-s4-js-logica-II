const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando reduce, Some todos os números da array
console.log(arrNumeros.reduce((Pvalue, Cvalue) => Pvalue + Cvalue))
// Some todas os número pares (pode usar filter em conjunto ou apenas o reduce)
console.log(arrNumeros.filter(value => value % 2 === 0).reduce((Pvalue, Cvalue) => Pvalue + Cvalue))


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

console.log(arrObjetos.reduce((Pvalue, Cvalue) => Pvalue + Cvalue['idade'], 0))
// Some todas as idades das pessoas menores de idade
console.log(arrObjetos.filter(object => object['idade'] < 18).reduce((Pvalue, Cvalue) => Pvalue + Cvalue['idade'], 0))

