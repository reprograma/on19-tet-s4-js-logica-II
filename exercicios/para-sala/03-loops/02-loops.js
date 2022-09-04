console.clear()

const listaFrutas = [
    "Banana",
    "Manga",
    "Maçã",
    "Pêra",
    "Abacaxi",
    "Banana",
    "Manga",
    "Maçã",
    "Pêra",
    "Abacaxi"
]

for (const fruta of listaFrutas) { //passa item por item do código verificando algo.
    //console.log(fruta)
}

const obj = {
    nome: "Pâm",
    idade: 35,
    planeta: "Sapalândia"
}

console.log(obj["nomes"])

for (const key in obj) { //usado para objetos, provê as chaves
    
    if(key === "idade") {
        obj[key] = 77
    }
    console.log(key + ":" + obj[key])
}
console.log(obj)