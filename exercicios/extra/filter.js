const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando filter, imprima apenas os números acima de 10
const ac10 = arrNumeros.filter(item => item > 10);
console.log(ac10);




// Usando filter, imprima apenas os números pares
const pares = arrNumeros.filter(item => item % 2 === 0);
console.log(pares);


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
const adultos = arrObjetos.filter(arrObjetos => arrObjetos.idade > 18);
console.log(adultos);



// usando filter, imprima apenas as pessoas cuja letra inicial do nome seja C


const InicialC = (arrObjetos) =>{
  console.log(arrObjetos, arrObjetos.nome[arrObjetos.nome.length]);
  return arrObjetos.nome[arrObjetos.nome.length ];
}



