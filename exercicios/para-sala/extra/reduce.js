console.clear()

const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const somado = arrNumeros.reduce((anterior, atual) => anterior += atual * 2) //tudo que for necessário fazer com números. 
//console.log(somado); 

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

//let soma = 0
//const somaObj = arrObjetos.reduce((x, atual) => soma += atual.idade)

const somaObj = arrObjetos.reduce((anterior, atual) => anterior + atual.idade, 0) 
console.log(somaObj);