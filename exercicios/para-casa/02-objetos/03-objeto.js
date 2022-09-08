console.clear();

const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// 1 usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um
for (i in pessoa.apelidos){
  console.log(pessoa.apelidos[i]);
}

//OU
// 2 usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um
for (let i = 0; i < pessoa.apelidos.length; i++){
  console.log(pessoa.apelidos[i])
}