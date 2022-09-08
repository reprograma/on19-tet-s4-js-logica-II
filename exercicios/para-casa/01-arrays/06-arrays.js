// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const swap = frase.replace("sou", "não sou");
console.log(swap)

// usando replace, troque 'algumas' por 'poucas'
const swap2 = frase.replace("algumas", "poucas"); 
console.log("\n", swap2);

// usando replace, troque 'Eu' por 'Ieu mema'
const swap3 = frase.replace("Eu", "Ieu mema"); 
console.log("\n", swap3);

// usando replaceAll trocar todas as letras a por -
const swap4 = frase.replaceAll("a", "-"); 
console.log("\n", swap4);

// use replace com regex para trocar todas as letras a por -
const swap5 = frase.replace(/a/gi, "-"); 
console.log("\n", swap5);