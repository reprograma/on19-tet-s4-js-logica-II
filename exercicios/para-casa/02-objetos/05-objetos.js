const pessoa = {
  nome: "Lydianne",
  idade: 33,
  altura: 1.60,
  temCNH: true,
  apelidos: ["Ly", "Lydia", "Anne"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.

for (const key in pessoa) {
  if (key === "nome") {
    pessoa[key] = "Lydianne"
  }
  console.log(key + ":" + pessoa[key]);
}
