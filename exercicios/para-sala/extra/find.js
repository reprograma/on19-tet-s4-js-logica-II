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

  const encontrado = arrObjetos.find(item => (item.idade === 14));
  console.log(encontrado);