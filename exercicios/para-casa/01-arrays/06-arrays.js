// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'

const troca = frase.replace("sou","não sou");
console.log(troca);

// usando replace, troque 'algumas' por 'poucas'

const troca2 = frase.replace("algumas","poucas");
console.log(troca2);

// usando replace, troque 'Eu' por 'Ieu mema'
const troca3 = frase.replace("Eu","Ieu mema");
console.log(troca3);

// usando replaceAll trocar todas as letras a por -
const troca4 = frase.replaceAll("a", "-");
console.log(troca4);

// use replace com regex para trocar todas as letras a por -
const troca5 = frase.replace(/a/gi, "-");
console.log(troca5);