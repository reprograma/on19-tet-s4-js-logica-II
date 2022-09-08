const pessoa = {
  nome: "Gabrielli",
  idade: 29,
  altura: 1.57,
  temCNH: true,
  apelidos: ["Gabi", "Gabe", "Bia"],
};

// usando for in, imprima todas as propriedades e seus valores, um por um.

for (const key in pessoa) {
  if (key === "nome") {
    pessoa[key] = "Gabrielli"
  }
  console.log(key + ":" + pessoa[key]);
}
