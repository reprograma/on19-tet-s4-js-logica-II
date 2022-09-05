<<<<<<< HEAD
console.clear()
    const listaFrutas = [
        "banana", 
        "Manga", 
        "Maça", 
        "Pera",
        "Abacaxi"
      
      ]

      const resultado = listaFrutas.splice(2, 1) //(a partir de tal posição, qtde a ser cortada) se colocar zero na qtde ele nao corta ninguem) 
                                    //se colocar " " dentro do parenteses ele vai aumentar o item na lista
      console.log("comeu", resultado)

      console.log("sobrou", listaFrutas)
=======
console.clear();
//splice
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

const resultado = listaFrutas.splice(2, 1);
console.log("Comeu: ", resultado);
console.log("Sobrou: ", listaFrutas);

listaFrutas.splice(2, 0, "Uva");
console.log("Sobrou: ", listaFrutas);

>>>>>>> 92378f8ad91f93246f06241636365ec06194fcdb
