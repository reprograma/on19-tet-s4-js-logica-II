console.clear();
const usuarios = [
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

