console.clear();

// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const trocado = frase.replace("sou", "não sou");
console.log("\n" + trocado);

// usando replace, troque 'algumas' por 'poucas'
const trocado2 = frase.replace("algumas", "poucas");
console.log("\n" + trocado2);

// usando replace, troque 'Eu' por 'Ieu mema'
const trocado3 = frase.replace("Eu", "Ieu mema");
console.log("\n" + trocado3);

// usando replaceAll trocar todas as letras a por -
const trocado4 = frase.replaceAll("a", "-");
console.log("\n" + trocado4);

// use replace com regex para trocar todas as letras a por -
const trocado5 = frase.replace(/a/gi, "-");
console.log("\n" + trocado5);