const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando reduce, Some todos os números da array
const somaTodos = arrNumeros.reduce((acumulador, valor) => acumulador + valor)
console.log(somaTodos)

// Some todas os número pares (pode usar filter em conjunto ou apenas o reduce)
const somaPares = arrNumeros.reduce((total, valor) => {
  return valor % 2 == 0 ? total + valor : total;
  },0);

  console.log(somaPares)


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
console.log(arrObjetos.map(pessoa =>pessoa.idade).reduce((sum, val) => sum + val, 0));

// Some todas as idades das pessoas menores de idade
function somaMenores() {
  return arrObjetos.reduce(function(total, value) {
  return (value.idade > 18) ? total : total + value.idade;

  }, 0);
}
console.log(somaMenores());