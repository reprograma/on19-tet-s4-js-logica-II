const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


// x é cada item, depois do => condição, true ele adiciona no array filtrada false, ele ignora const arrFiltrada = arrNumeros.filter(x => x < = 14);

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

// Filtrar todas as pessoas com idade acima de 21 
const pessoasFiltradas = arrObjetos.filter(pessoa => pessoa.idade > 18);

// com função externa
const filtrador = (pessoa) => {
  return pessoa.nome[pessoa.nome.length - 1] === "a"
}

const filtroComFuncao = arrObjetos.filter(filtrador);
console.log(filtroComFuncao)

