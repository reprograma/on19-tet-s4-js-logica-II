const pessoa = {
  nome: "Aline",
  idade: 36,
  altura: 1.68,
  temCNH: true,
  apelidos: ["Line", "Li", "Lica"],

  faixaEtaria: function () {
    if (pessoa.idade == 18)
      return console.log("Olá sou uma pessoa jovem.");
        if(pessoa.idade > 18 && pessoa.idade <= 64)
            return console.log("Olá sou uma pessoa adulta.");
              if(pessoa.idade >= 65);
                  return console.log("Olá sou uma pessoa idosa.");
     }
 };




// crie um método nesse objeto chamado faixaEtaria,
// que irá imprimir se a pessoa é jovem, adulta ou idosa
// sendo jovem até exatamente 18 anos, adulta até exatamente 64 e idosa acima ou igual 65 anos
// ex: Olá, sou uma pessoa jovem!

pessoa.faixaEtaria();


// altere a idade da pessoa do objeto para 77 anos e utilize o método que criou para imprimir sua faixa etária
console.log(`Minha idade é ${pessoa.idade} anos.`);