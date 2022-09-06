// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
{
    let phrase = frase.replace ("sou", "não sou");
    console.log (phrase)
}
// usando replace, troque 'algumas' por 'poucas'
{
    let phrase = frase.replace ("algumas", "poucas");
    console.log (phrase)
}
// usando replace, troque 'Eu' por 'Ieu mema'
{
    let phrase = frase.replace ("Eu", "Ieu mema");
    console.log (phrase)
}
// usando replaceAll trocar todas as letras a por -
{
    let phrase = frase.replaceAll ('a', "-");
    console.log (phrase)
}
// use replace com regex para trocar todas as letras a por -
{
    let phrase = frase.replace (/a/g, "-");
    console.log (phrase)
}