console.clear();
const Frase = "I Was Here"
// Acessando indice da string
console.log(Frase[3], Frase[4], Frase[5])

// procurando se existe uma parte da string
console.log("buscando em string")
if (Frase.includes("Was"))  {
    console.log("Encontrei",Frase.includes("Was") )
} else {
    console.log("Não encontrei")
}

// procurando algo na array
console.log("buscando em arrays")
const listasTextos = ["Banana, maça, pera"];
const Palavrasbuscadas = listasTextos.includes("palavras")
if (Palavrasbuscadas){
    console.log("Encontrei",Palavrasbuscadas)
} else {
    console.log("Não encontrei",Palavrasbuscadas)
}
