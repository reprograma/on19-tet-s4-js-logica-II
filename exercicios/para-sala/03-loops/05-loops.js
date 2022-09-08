const pessoas = [
  {
    nome: "Fulana",
    idade: 31,
    cpf: 394875384645645
  },
  {
    nome: "Fulana2",
    idade: 43,
    cpf: 394875384456
  },
  {
    nome: "Fulana3",
    idade: 22,
    cpf: 34564565384675
  },
  {
    nome: "Fulana4",
    idade: 17,
    cpf: 39445644675,
    hashPassword: "asdasd"
  }
];

const getUsers = () => {
  return pessoas;
}

const objetifica = (usuarios) => {
  const sanitizado = {
    nome: usuarios.nome,
    idade: usuarios.idade < 18 ? "Jovem" : "Adulto"
  };
  return sanitizado;
}

const objetificador = () => {
  const usuarios = getUsers(); //peguei do db
  const sanitizado = usuarios.map(objetifica); //fiz o modelo pro front
  console.log(sanitizado);
}


objetificador();
