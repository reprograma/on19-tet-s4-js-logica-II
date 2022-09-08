console.clear();
const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um

let contador = 0
while (contador < pessoa.apelidos.length) {
  console.log(pessoa.apelidos[contador])
  contador++

}