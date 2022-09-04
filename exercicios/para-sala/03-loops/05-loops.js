
/*
const objetificador = () => {

}


function objetificador2() {

}
*/


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

const getUsers = () => {
    return usuarios;
}
const objetificar = (usuarios) => {
    const sanitizados = {
        nome: usuarios.nome,
        idade: usuarios.idade < 18 ? "Jovem" : "Adulto"
    };
    return sanitizados
}

const objetificador = () => { 
    const usuarios = getUsers() //peguei do BD
    const sanitizados = usuarios.map(objetificar)
    console.log(sanitizados)
}

objetificador()




/*
const objetificador = (props) => { //props recebe todas as entradas que serão trabalhados.
    const resultado = props.map(() => { }) // a função precisa ter alguma utilidade. 
    return resultado
}

objetificador([])
*/


