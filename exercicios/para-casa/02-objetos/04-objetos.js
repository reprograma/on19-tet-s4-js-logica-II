const pessoa = {
  nome: "Fulana",
  idade: 77, // valor declarado e inicializado em 41
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// crie um método nesse objeto chamado faixaEtaria,
// que irá imprimir se a pessoa é jovem, adulta ou idosa
// sendo jovem até exatamente 18 anos, adulta até exatamente 64 e idosa acima ou igual 65 anos
// ex: Olá, sou uma pessoa jovem!

let addMetodo = pessoa["faixaEtaria"];
addMetodo = pessoa["faixaEtaria"] = function() {
  if (this.idade == 18 || this.idade < 18) {
    console.log(`Olá, sou uma pessoa jovem`);
} else if (this.idade == 64 || this.idade>18 && this.idade<65) {
  console.log(`Olá, sou uma pessoa adulta`);
} else if (this.idade >= 65) {
  console.log(`Olá, sou uma pessoa idosa`);
}};
/*pessoa.faixaEtaria(); //executa o método faixaEtaria com valor original de pessoa.idade = 41 e imprime a frase: Olá, sou uma pessoa adulta*/

// altere a idade da pessoa do objeto para 77 anos e utilize o método que criou para imprimir sua faixa etária
pessoa.faixaEtaria(); // Após atualizar o valor de 41 para 77, conforme solicitado, executa o método faixaEtaria e imprime a frase: Olá, sou uma pessoa idosa
