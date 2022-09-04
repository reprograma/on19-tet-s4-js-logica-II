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

const favorita = "Pera";
const nova = [];

for (const fruta of listaFrutas) {
  if (fruta === favorita) {
    console.log("Eu gosto de " + fruta);
  } else {
    console.log("Eu não gosto de " + fruta);
  }

  if (fruta[0] === "M") {
    nova.push(fruta)
  }
}
console.log("Achei essas com letra M " + nova);

const obj = {
  nome: "Giu",
  idade: 42,
  planeta: "Conchgh"
}

for (const key in obj) {
  if (key === "idade") {
    obj[key] = 77
  }
  console.log(key + ":" + obj[key]);
}
console.log(obj);
>>>>>>> c1bd3cbe04b8629af86880ff7c3cafd420ee2519
