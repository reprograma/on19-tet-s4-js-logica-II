const pessoa = {
  nome: "Rafa",
  idade: 22,
  altura: 1.75,
  temCNH: true,
  apelidos: ["beckynha", "xota", "Beck"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const key in pessoa) {
  if (key === "nome") {
    pessoa[key] = "Rafa"
  }
  console.log(key + ":" + pessoa[key]);
}