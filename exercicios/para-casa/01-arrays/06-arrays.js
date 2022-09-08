// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'

const trocandoPalavra = frase.replace("sou", "não sou");
console.log(trocandoPalavra);


// usando replace, troque 'algumas' por 'poucas'

const trocado1 = frase.replace("algumas", "poucas");
console.log(trocado1);


// usando replace, troque 'Eu' por 'Ieu mema'

const trocado2 = frase.replace("Eu", "Ieu mema");
console.log(trocado2);


// usando replaceAll trocar todas as letras a por -

const trocado3 = frase.replaceAll("a", "-");
console.log("\n", trocado3);

// use replace com regex para trocar todas as letras a por -

const trocado4 = frase.replace(/a/gi, "-");
console.log("\n", trocado4);
