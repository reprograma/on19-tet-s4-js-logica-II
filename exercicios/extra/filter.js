const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando filter, imprima apenas os números acima de 10
console.log(arrNumeros.filter(value => value > 10))
// Usando filter, imprima apenas os números pares
console.log(arrNumeros.filter(value => value % 2 === 0))

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

// usando filter, imprima uma array só com os adultos
console.log(arrObjetos.filter(object => object['idade'] > 18))

// usando filter, imprima apenas as pessoas cuja letra inicial do nome seja C
for (object of arrObjetos.filter(object => object['nome'][0] === 'C')) {
  console.log(object['nome'])
}
