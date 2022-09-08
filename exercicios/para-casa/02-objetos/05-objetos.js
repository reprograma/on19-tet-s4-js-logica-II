const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const chave in pessoa)
{if (chave === "nome")
{pessoa[chave] = "Fulana"
}
console.log(chave + ":" + pessoa[chave]);
}
