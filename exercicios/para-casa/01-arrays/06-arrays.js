console.clear ();
// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const trocado = frase.replace ("sou", "não sou");
console.log(trocado);


// usando replace, troque 'algumas' por 'poucas'
const trocado1 = frase.replace ("algumas", "poucas");
console.log(trocado1);


// usando replace, troque 'Eu' por 'Ieu mema'
const trocado2 = frase.replace ("Eu", "Ieu mema");
console.log(trocado2);

// usando replaceAll trocar todas as letras a por -
const trocado3 = frase.replaceAll ("a", "-");
console.log(trocado3);

// use replace com regex para trocar todas as letras a por =
const regex = frase.replace(/a/gi, "=") ;
console.log(regex);