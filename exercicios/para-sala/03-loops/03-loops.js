
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

const numerar = (fruta, index) => {
    const resultado = `${index + 1} - ${fruta}`;
    return resultado
}

const objetificar = (fruta, i) => {
    const obj = {
        nome: fruta,
        local: i
    }
    return obj
}

const mapeado = listaFrutas.map(objetificar)

console.log(mapeado);

