// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";


// usando replace, troque 'sou' por 'não sou'
const novaFrase = frase.replace("sou","não sou");
console.log("\n" + frase);
console.log("\n" + novaFrase);

// usando replace, troque 'algumas' por 'poucas'
const novaFrase1 = frase.replace("algumas","poucas");
console.log("\n" + frase);
console.log("\n" + novaFrase1);


// usando replace, troque 'Eu' por 'Ieu mema'
const novaFrase2 = frase.replace("Eu","Ieu mema");
console.log("\n" + frase);
console.log("\n" + novaFrase2);


// usando replaceAll trocar todas as letras a por -


// use replace com regex para trocar todas as letras a por -

const trocado3 = frase.replace(/a/gi, "A");
console.log("\n", trocado3);

const trocado4 = frase.replaceAll("a", "A");
console.log("\n", trocado4);

