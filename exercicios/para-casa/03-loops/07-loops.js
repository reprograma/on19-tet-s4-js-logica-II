// usando map, adicione um número sequencial para cada item, 
//ex: 1 - banana, 2 - pera 3- uva ...
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"];

const numerar = arrayExercicio.map(
  (fruta, i) => {
    const resultado = `${i + 1} - ${fruta}`;
    return resultado;
  }
);
console.log(numerar)