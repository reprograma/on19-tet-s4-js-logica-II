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
<<<<<<< HEAD
    cpf: 39445644675
=======
    cpf: 39445644675,
    hashPassword: "asdasd"
>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
  }
];

const proFront = usuarios.map(
  (pessoa) => {
    const sanitizado = {
      nome: pessoa.nome,
<<<<<<< HEAD
      idade: pessoa.idade
=======
      idade: pessoa.idade < 18 ? "Jovem" : "Adulto"
>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
    };
    return sanitizado;
  }
);

<<<<<<< HEAD
console.log(usuarios, proFront);
=======
console.log(proFront);

>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
