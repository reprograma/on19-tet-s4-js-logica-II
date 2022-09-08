// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const trocando = frase.replace ("sou", "não sou");
console.log(trocando);

// usando replace, troque 'algumas' por 'poucas'
const trocando2 = frase.replace ("algumas", "poucas");
console.log(trocando2);

// usando replace, troque 'Eu' por 'Ieu mema'
const trocando3 = frase.replace ("Eu", "Ieu mema");
console.log(trocando3);

// usando replaceAll trocar todas as letras a por -
const trocando4 = frase.replaceAll ("a", "-");
console.log(trocando4);

// use replace com regex para trocar todas as letras a por -
const trocando5 = frase.replace (/a/gi, "-");
console.log(trocando5);