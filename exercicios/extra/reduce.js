const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando reduce, Some todos os números da array
const somando = arrNumeros.reduce((anterior, atual) => anterior += atual);
console.log("Soma de todos os itens:", somando);

// Some todas os número pares (pode usar filter em conjunto ou apenas o reduce)
const somaPares = arrNumeros
  .filter(item => item % 2 === 0)
  .reduce((anterior, atual) => {
    //console.log(anterior + "+" + atual);
    return anterior + atual;
  }, 0);

console.log("Soma de todos os itens pares:", somaPares);

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
const somaIdades = arrObjetos.reduce((anterior, atual) => anterior += atual.idade,0)

console.log("Soma de todas as idades:", somaIdades);

// Some todas as idades das pessoas menores de idade

const somaMenores = arrObjetos.filter((menor) => menor.idade < 18)
.map((arrObjetos) => arrObjetos.idade,0)
.reduce((anterior, atual) => anterior += atual)
console.log("Soma dos menores de idade:", somaMenores)

