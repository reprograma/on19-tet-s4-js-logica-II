const dia = 1;
const mes = 2;
const ano = 2027;

// imprima 01/02/2027 usando as constantes acima e padStart para adicionar o zero em dia e mes

const formataDia = (dia.toString()).padStart(2, 0)
const formataMes = (mes.toString()).padStart(2, 0)
console.log(`${formataDia}/${formataMes}/${ano}`)