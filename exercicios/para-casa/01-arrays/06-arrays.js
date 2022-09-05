// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
let fraseNova = frase.replace("sou", "não sou")
console.log(fraseNova)

// usando replace, troque 'algumas' por 'poucas'
let novaFrase = frase.replace("algumas", "poucas")
console.log(novaFrase)

// usando replace, troque 'Eu' por 'Ieu mema'
let newFrase = frase.replace("Eu", "Ieu mema")
console.log(newFrase)

// usando replaceAll trocar todas as letras a por -
let fraseNew = frase.replaceAll("a", " - ")
console.log(fraseNew)


// use replace com regex para trocar todas as letras a por -
let frase2 = frase.replaceAll(/a/gi, " - ")
console.log(frase2)