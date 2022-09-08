// Imprima o que pedem os comentários
console.clear();

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const troca = frase.replace("sou", "não sou");
console.log(troca)

// usando replace, troque 'algumas' por 'poucas'
const fraseModificada = frase.replace("algumas", "poucas");
console.log(fraseModificada)

// usando replace, troque 'Eu' por 'Ieu mema'
const fraseAlterada = frase.replace("Eu", "Ieu mema");
console.log(fraseAlterada)

// usando replaceAll trocar todas as letras a por -
const modificado = frase.replace("Eu sou uma frase com algumas palavras", "-----------------");
console.log(modificado)

// use replace com regex para trocar todas as letras a por -
const alterado = frase.replace("Eu sou uma frase com algumas palavras", "Eu sou um- fr-se com -lgum-s p-l-vr-s");
console.log(alterado)