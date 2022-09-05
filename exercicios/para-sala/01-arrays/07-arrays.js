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