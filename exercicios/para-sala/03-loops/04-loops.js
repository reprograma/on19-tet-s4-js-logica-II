console.clear();
const usuarios = [
<<<<<<< HEAD
    {
        nome: "Fulana",
        idade: 31,
        cpf: 352854654852
    },
    {
        nome: "Fulana2",
        idade: 45,
        cpf: 32212154654852
    },
    {
        nome: "Fulana",
        idade: 17,
        cpf: 3528231512
    },
    {
        nome: "Fulana",
        idade: 72,
        cpf: 21511654852
    }
];

const proFront = usuarios.map(
    (pessoa) => {
        const baseSegura = {
            nome: pessoa.nome,
            idade: pessoa.idade < 18 ? "Jovem" : "Adulto"
        };
        return baseSegura;
    }
);

console.log(usuarios, proFront);
=======
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
>>>>>>> 92378f8ad91f93246f06241636365ec06194fcdb

