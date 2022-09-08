// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'
let cont = frase.indexOf("frase"); //O comando desses exercícios parecem pedir que corte a palavra e RETIRE ela, imprimindo a frase sem ela porém estudando slice
const cut = frase.slice(cont, cont+5); //pelo MDN parece estar certo que slice apenas corta daquela posição pra frente
console.log(cut)

//Se o objetivo fosse retirar apenas a palavra frase, poderia ser feito então da seguinte forma:
const cutAlt = frase.slice(0, 10);
const cutAlt2 = frase.slice(17)
console.log(cutAlt, cutAlt2)
// Usando slice, corte da frase a palavra 'algumas'
let cont2 = frase.indexOf("algumas");
const cut2 = frase.slice(cont2, cont2+7);
console.log(cut2);

// Usando slice, corte da frase as frase 'algumas palavras'
let cont3 = frase.indexOf("algumas");
const cut3 = frase.slice(cont3, cont3+16);
console.log(cut3);

// Usando slice, corte da frase a palavra 'frase'

// Faça o mesmo dos exercícios acima usando substring
const cut4 = frase.substring(cont, cont+5);
console.log(cut4);


const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Usando slice, colete um pedaço da array do segundo item em diante
const arrayCut = arrayExercicio.slice(1);
console.log(arrayCut);

// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
const arrayCut2 = arrayExercicio.slice(3, 4); //Entre o terceiro e quinto é apenas o 4 ou do 3 ATÉ 5??
console.log(arrayCut2);

// Usando slice, colete um pedaço da array: os dois últimos itens
const arrayCut3 = arrayExercicio.slice(5);
console.log(arrayCut3);