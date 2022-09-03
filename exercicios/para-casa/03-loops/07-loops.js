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

/*

const mapear = arrayExercicio.map(
  
    (fruta, index) => {

      const resultado =  `${index +1} - ${fruta} ` ;
      return resultado;

      
}


console.log(resultado);




);

*/


const numerar = (fruta,index) => {
  const mapear = `${index + 1 } - ${fruta}`;
  return mapear;
   
}
const loucura =arrayExercicio.map(numerar);

console.log(loucura);