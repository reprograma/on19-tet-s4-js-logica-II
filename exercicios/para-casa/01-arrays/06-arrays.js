// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const trocar = frase.replace("sou","não sou");
console.log(trocar);

// usando replace, troque 'algumas' por 'poucas'
const trocar2 = frase.replace("algumas","poucas");
console.log(trocar2);

// usando replace, troque 'Eu' por 'Ieu mema'
const trocar3 = frase.replace("Eu","Ieu mema");
console.log(trocar3);

// usando replaceAll trocar todas as letras a por -
const trocar4 = frase.replaceALL("a","-");
console.log(trocar4);

// use replace com regex para trocar todas as letras a por -
const trocar5 = frase.regex(/a/gi,"-");
console.log(trocar5);