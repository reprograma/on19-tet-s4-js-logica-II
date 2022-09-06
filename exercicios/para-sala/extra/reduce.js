console.clear();
const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const somado = arrNumeros.reduce((anterior, atual) => anterior += atual * 2);

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

const somaObj = arrObjetos.reduce((anterior, atual) => anterior += atual.idade, 100)

console.log(somaObj);
