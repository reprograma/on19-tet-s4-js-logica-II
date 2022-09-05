console.clear()
    const listaFrutas = [
        "banana", 
        "Manga", 
        "Maça", 
        "Pera",
        "Abacaxi"
      
      ]

      function comparar(a, b) {
        if (a > b) {
            return -1
        }
        if (b > a) {
            return 1
        }

        return 0
      }

      const ordenado = listaFrutas.sort(comparar)
      console.log(listaFrutas)