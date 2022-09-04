<<<<<<< HEAD
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
=======
console.clear();
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi",
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi",
];

const numerar = (fruta, index) => {
  const resulta = `${index + 1} - ${fruta}`;
  return resulta;
}

const objetificar = (fruta, i) => {
  const obj = {
    nome: fruta,
    local: i
  }
  return obj;
}

const mapiado = listaFrutas.map(objetificar);

console.log(mapiado);
>>>>>>> c1bd3cbe04b8629af86880ff7c3cafd420ee2519
