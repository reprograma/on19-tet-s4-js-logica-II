console.clear()
//objetos

const pessoa = {
    nome: "Pâm",
    idade: 35,
    temCnh: true,
    hobbies: ["Séries", "Brejas"],
    carro: {
        marca: "peugeot",
        nome: "207 passion",
        motor: {
            potencia: 200,
            combustivel: "gasolina"
        }
    },
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. ,eu primeiro hobby é ${this.hobbies[0]}`)
    },
    saudar: () => {
       // console.log(this.); <== não tem this na arrow function } }
    }

}

pessoa.apresentar()

console.log("Nome: ", pessoa.nome)

pessoa.hobbies.push("Codar")
console.log("Hobby: ", pessoa.hobbies[pessoa.hobbies.length - 1])

pessoa.carro.motor.potencia += 50 
console.log(pessoa.carro.motor)