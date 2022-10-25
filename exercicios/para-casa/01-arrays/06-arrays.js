// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const trocaPalavra = frase.replace("sou","não sou");
console.log(trocaPalavra)

// usando replace, troque 'algumas' por 'poucas'
const trocaPalavra2 = frase.replace("algumas","poucas");
console.log(trocaPalavra2);


// usando replace, troque 'Eu' por 'Ieu mema'
const trocaPalavra3 = frase.replace("Eu","Ieu mema");
console.log(trocaPalavra3,)


// usando replaceAll trocar todas as letras a por -
const trocaLetra = frase.replaceAll("a", "-");
console.log(trocaLetra);


// use replace com regex para trocar todas as letras a por -
const trocaLetra2 = frase.replace(/a/gi, "-");
console.log(trocaLetra2);