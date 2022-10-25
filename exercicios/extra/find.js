// crie um execício que use o find
const arrayLivros = [
    {
      id: "1258d57",
      livro: "O diário da princesa",
      paginas: 284
    },
    {
      id: "44s4df5",
      livro: "As brumas de Avalon: A senhora da magia",
      paginas: 248
    },
    {
      id: "99d4sw27",
      livro: "Maze Runner: Correr ou morrer",
      paginas: 426
    },
    {
      id: "4fd414e",
      livro: "Garota exemplar",
      paginas: 446
    },
    {
      id: "554s6a1",
      livro: "Se não fosse você",
      paginas: 399
    },
    {
      id: "87a00d2d5",
      livro: "A menina que roubava livros",
      paginas: 478
    }
  ];
  
  const idLivro = "44s4df5";
  
  const localizaPorId = arrayLivros.find(item => (item.id === idLivro));
  console.log("Procura item por ID:\n", localizaPorId);

  const nomeLivro = "Garota exemplar";
  
  const localizaPorNome = arrayLivros.find(item => (item.livro === nomeLivro));
  console.log("Procura item por nome:\n", localizaPorNome);
  