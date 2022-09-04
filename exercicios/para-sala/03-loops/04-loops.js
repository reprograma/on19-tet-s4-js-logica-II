console.clear()

const usuarios = [
    {
        nome: "Fulana",
        idade: 33,
        cpf: 131313131313
    },
    {
        nome: "Fulana1",
        idade: 16,
        cpf: 13131313
    },
    {
        nome: "Fulana2",
        idade: 19,
        cpf: 13131313131
    },
    {
        nome: "Fulana3",
        idade: 35,
        cpf: 1313131313
    }
]

const proFront = usuarios.map(
    (pessoa) => {
        const sanitizados = {
            nome: pessoa.nome,
            idade: pessoa.idade < 18 ? "Jovem" : "Adulto"
        };
        return sanitizados
    }
)

//console.log(proFront)


//if ternário
// condição ? se é verdade : se é mentira

console.log(5 < 6 ? "Sim" : "Não");