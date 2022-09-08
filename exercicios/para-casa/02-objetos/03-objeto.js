const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um

for (let index = 0; index < pessoa.apelidos.length; index ++){
  console.log (pessoa.apelidos[index])
}