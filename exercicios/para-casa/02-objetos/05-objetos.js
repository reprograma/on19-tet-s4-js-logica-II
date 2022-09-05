const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (propriedade in pessoa) {
  if (Array.isArray(pessoa[propriedade])) {
    for (value of pessoa[propriedade]) {
      console.log(value)
    }
  } else {
    console.log(pessoa[propriedade])
  }
}