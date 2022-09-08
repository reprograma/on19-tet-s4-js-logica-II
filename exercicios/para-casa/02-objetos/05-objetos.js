const pessoa = {
  nome: "Karoline",
  idade: 47,
  altura: 1.63,
  temCNH: true,
  apelidos: ["Ka", "Kah", "Beta"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.

for (const key in pessoa) {
  if (key === "nome") {
    pessoa[key] = "Karoline"
  }
  console.log(key + ":" + pessoa[key]);
}