// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
console.log(frase.replace("sou", "não sou"));

// usando replace, troque 'algumas' por 'poucas'
console.log(frase.replace("algumas", "poucas"));

// usando replace, troque 'Eu' por 'Ieu mema'
console.log(frase.replace("Eu", "Ieu mema"));

// usando replaceAll trocar todas as letras a por -
console.log(frase.replaceAll("a", "-"));

// use replace com regex para trocar todas as letras a por -
const fraseRegex = frase.replace(/a/g, "-")
console.log(fraseRegex);