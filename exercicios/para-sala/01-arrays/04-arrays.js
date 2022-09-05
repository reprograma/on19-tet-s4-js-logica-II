console.clear()
    const listaFrutas = [
        "banana", 
        "Manga", 
        "Maça", 
        "Pera",
        "Abacaxi"
      
      ]

        // cortando Arrays
        const arrayCortada = listaFrutas.slice(1)
        console.log("Indice positivo", arrayCortada)

        const arrayCortada2 = listaFrutas.slice(-2) // nao conta a partir do 0 e sim -1
        console.log("Indice positivo", arrayCortada2)

        const arrayCortada3 = listaFrutas.slice(2, 4)
        console.log("Indice positivo", arrayCortada3) 

        /* outra forma

        console.clear();
const frase = "Eu sou uma frase com algumas palavras"; // -> mudando para essa frase

const strCortada = frase.slice(7); // -> slice vira FRASE.slice
console.log("string", strCortada);

const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

// Cortando arrays
const arrayCortada = listaFrutas.slice(1);
console.log("\nÍndice positivo", arrayCortada);

const arrayCortada2 = listaFrutas.slice(-4);
console.log("\nÍndice negativo", arrayCortada2);

const arrayCortada3 = listaFrutas.slice(2, 4);
console.log("\nposição parada", arrayCortada3);
*/
        
