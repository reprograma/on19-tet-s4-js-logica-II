console.clear();
const dia = 1;
const mes = 2;
const ano = 2027;

// imprima 01/02/2027 usando as constantes acima e padStart para adicionar o zero em dia e mes
const dia1 = dia.toString().padStart(2, '0');
const mes1 = mes.toString().padStart(2,'0');

console.log(dia1 + "/" + mes1 + "/" + ano)