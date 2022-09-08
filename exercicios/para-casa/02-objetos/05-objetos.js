console.clear()
const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const propriedades in pessoa) {
  if (propriedades === "idade") {
    pessoa[propriedades] = 41
  }
  console.log(propriedades + ":" + pessoa[propriedades]);
}
console.log(pessoa);