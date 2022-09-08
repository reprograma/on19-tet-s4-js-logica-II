const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// crie um método nesse objeto chamado faixaEtaria,
// que irá imprimir se a pessoa é jovem, adulta ou idosa
// sendo jovem até exatamente 18 anos, adulta até exatamente 64 e idosa acima ou igual 65 anos
// ex: Olá, sou uma pessoa jovem!


if (pessoa.idade <= 18){
  console.log(`${pessoa.nome} é jovem`);
}else if (pessoa.idade <= 64) {
  console.log(`${pessoa.nome} é adulta`);
}else {
  console.log(`${pessoa.nome} é idosa`);
}
// altere a idade da pessoa do objeto para 77 anos e utilize o método que criou para imprimir sua faixa etária
 pessoa.idade = 77;

 console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);