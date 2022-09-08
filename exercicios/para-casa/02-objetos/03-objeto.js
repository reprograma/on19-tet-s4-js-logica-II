const pessoa = {
  nome: "Aline",
  idade: 36,
  altura: 1.68,
  temCNH: true,
  apelidos: ["Line", "Li", "Lica"],
};


// usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um
let cont = 0
while (cont < pessoa.apelidos.length) {
  console.log(pessoa.apelidos[cont])
  cont++

}