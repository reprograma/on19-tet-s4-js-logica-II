const dia = 1;
const mes = 2;
const ano = 2027;

// imprima 01/02/2027 usando as constantes acima e padStart para adicionar o zero em dia e mes

const day = dia.toString();
const month = mes.toString();
const year = ano.toString();

const dateDay = day.padStart(2,'0');
const dateMonth = month.padStart(2,"0");
const dateYear = year.padStart(4,"0");

const date = dateDay + '/' + dateMonth + '/' + dateYear;

console.log (date)