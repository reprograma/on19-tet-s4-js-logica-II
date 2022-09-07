console.clear();
const arrObjetos = [
  {
    id: "erttt",
    nome: "Maria",
    idade: 21
  },
  {
    id: "erttt2",
    nome: "Josefa",
    idade: 12
  },
  {
    id: "erttt3",
    nome: "Clementina",
    idade: 55
  },
  {
    id: "erttt4",
    nome: "Gustava",
    idade: 14
  },
  {
    id: "erttt5",
    nome: "Chablana",
    idade: 33
  },
  {
    id: "erttt6",
    nome: "Chablana",
    idade: 77
  }
];

const procurado = "erttt6";

const encontrado = arrObjetos.find(item => (item.id === procurado));
console.log(encontrado);
