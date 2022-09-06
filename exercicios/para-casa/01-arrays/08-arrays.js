const dia = 1;
const mes = 2;
const ano = 2027;

// imprima 01/02/2027 usando as constantes acima e padStart para adicionar o zero em dia e mes

const reusltadodia = dia.toString().padStart(2, '0');
const resultadomes = mes.toString().padStart(2,'0');
console.log(reusltadodia,"/", resultadomes,"/", ano);
// esperamos a saida: "01/02/2027"