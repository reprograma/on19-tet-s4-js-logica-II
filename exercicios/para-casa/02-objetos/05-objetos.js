const pessoa = {
  nome: "Aline",
  idade: 36,
  altura: 1.68,
  temCNH: true,
  apelidos: ["Line", "Li", "Lica"],
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const key in pessoa) {
  if (key === "nome") {
    pessoa[key] = "Roberta"
  }
  console.log(key + ":" + pessoa[key]);
}
