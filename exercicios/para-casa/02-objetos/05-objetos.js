const pessoa = {
  nome: "Greice",
  idade: 30,
  altura: 1.60,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const key in pessoa) {
  if (key === "nome") {
    pessoa[key] = "Greice"
  }
  console.log(key + ":" + pessoa[key]);
}