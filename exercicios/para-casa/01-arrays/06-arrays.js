// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'

// usando replace, troque 'algumas' por 'poucas'

// usando replace, troque 'Eu' por 'Ieu mema'

// usando replaceAll trocar todas as letras a por -

// use replace com regex para trocar todas as letras a por -


const naoSou = frase.replace('sou', 'não sou')
console.log(naoSou)

const poucas = frase.replace('algumas', 'poucas')
console.log(poucas)

const euMema = frase.replace('Eu', 'Ieu mema')
console.log(euMema)

const substituiA = frase.replaceAll('a', '-')
console.log(substituiA)

const substituiAComRegex = frase.replace(/a/g, '-')
console.log(substituiAComRegex)