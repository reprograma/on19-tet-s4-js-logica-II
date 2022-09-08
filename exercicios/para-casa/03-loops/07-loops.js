// usando map, adicione um número sequencial para cada item, 
//ex: 1 - banana, 2 - pera 3- uva ...
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];
const numerar = (fruta, index) => {
  const resulta  = `${index + 1} - ${fruta}`
  return resulta
}

const organizar = (fruta, i) => {
  const obj = {
    nome: fruta,
    local: i 
  }
  return obj 
}

const mapiado = arrayExercicio.map(organizar);

console.log(mapiado);