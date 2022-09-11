const dia = 1;
const mes = 2;
const ano = 2027;

// imprima 01/02/2027 usando as constantes acima e padStart para adicionar o zero em dia e mes

const str1 = '1';
const str2 = '2';
const str3 = '2027';
console.log(`A data impressa é ${str1.padStart(2, "0")}/${str2.padStart(2, "0")}/${str3}`)
