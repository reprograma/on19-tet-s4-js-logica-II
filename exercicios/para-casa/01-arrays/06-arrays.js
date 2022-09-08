// Imprima o que pedem os comentários

const frase = "Eu sou uma frAse com algumas palavras";

// usando replace, troque 'sou' por 'não sou'

let fraseNova = frase.replace("sou" , "não sou")
console.log(fraseNova)


// usando replace, troque 'algumas' por 'poucas'

let fraseNova2 = frase.replace("algumas", "poucas")
console.log(fraseNova2)


// usando replace, troque 'Eu' por 'Ieu mema'

let fraseNova3 = frase.replace("Eu", "Ieu mema")
console.log(fraseNova3)


// usando replaceAll trocar todas as letras a por -

let fraseNova4 = frase.replaceAll("a", "-")
console.log(fraseNova4)


// use replace com regex para trocar todas as letras a por -

let fraseNova5 = frase.replace(/a/gi, "-") // gi é global insensitive, substituiu todas as letras idependente de ser maiuscula ou minuscula 

console.log(fraseNova5)
