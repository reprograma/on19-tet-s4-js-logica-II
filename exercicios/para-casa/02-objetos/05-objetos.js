const pessoa = {
  nome: "Adriane",
  idade: 36,
  altura: 1.55,
  temCNH: true,
  apelidos: ["Dri", "Adri", "Driane"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
