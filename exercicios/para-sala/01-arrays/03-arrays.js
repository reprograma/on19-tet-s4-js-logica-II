console.clear();
const Frase = "I Was Here"
// Achar o índice de algo 
 const IndexEncontrado = Frase.indexOf("Here");
console.log(IndexEncontrado, Frase[IndexEncontrado]);

// Achar o índice um item na arrays
const listasFrutas = ["Banana", "maça", "pera"];
const indexFrutas = listasFrutas.indexOf("maça");
console.log(listasFrutas[indexFrutas]);
if (indexFrutas > -1) {
    console.log(`encontrei ${listasFrutas[indexFrutas]} na posição ${indexFrutas}`);
} else{

    console.log("não encontrei a fruta")
}