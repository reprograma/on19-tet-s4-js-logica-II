const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando reduce, Some todos os números da array

<<<<<<< HEAD
const total = arrNumeros.reduce((total, currentElement) => total + currentElement);
console.log(total);

=======
>>>>>>> 05483aebfe1fbdaf014164360e1dbfd87c9a217e
// Some todas os número pares (pode usar filter em conjunto ou apenas o reduce)

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
<<<<<<< HEAD
const array = arrObjetos.reduce((Pvalor, Cvalor) => Pvalor
 += Cvalor.idade, 0)

 console.log(array);

// Some todas as idades das pessoas menores de idade


const array2 = arrObjetos.reduce((Pvalor, Cvalor) => Pvalor
 += Cvalor.idade < 18)
=======

// Some todas as idades das pessoas menores de idade
>>>>>>> 05483aebfe1fbdaf014164360e1dbfd87c9a217e
