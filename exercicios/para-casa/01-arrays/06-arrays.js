// Imprima o que pedem os comentários
console.clear();
const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const trocaPalavra = frase.replace("sou","não sou");
console.log(trocaPalavra)

// usando replace, troque 'algumas' por 'poucas'
const trocaPalavra1 = frase.replace("algumas","poucas");
console.log(trocaPalavra1)

// usando replace, troque 'Eu' por 'Ieu mema'
const trocaPalavra2 = frase.replace("Eu","Ieu mema");
console.log(trocaPalavra2)

// usando replaceAll trocar todas as letras a por -
const trocaPalavra3 = frase.replaceAll("a","-");
console.log(trocaPalavra3)

// use replace com regex para trocar todas as letras a por -
const trocaLetra1 = frase.replace(/a/gi, "-");
console.log(trocaLetra1);