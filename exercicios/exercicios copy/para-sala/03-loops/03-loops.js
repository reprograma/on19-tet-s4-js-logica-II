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
