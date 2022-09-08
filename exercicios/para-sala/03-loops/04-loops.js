console.clear();
const usuarios = [
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

const proFront = usuarios.map(
  (pessoa) => {
    const sanitizado = {
      nome: pessoa.nome,
      idade: pessoa.idade < 18 ? "Jovem" : "Adulto"
    };
    return sanitizado;
  }
);

console.log(proFront);

