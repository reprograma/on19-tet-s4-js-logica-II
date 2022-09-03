const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"],

};


function faixaEtaria (){
pessoa.idade;

if(idade <= 18 ){

console.log("Olá sou uma pessoa jovem, tenho", idade, " anos");

  } else if( idade < 19 && idade < 64) {
    console.log("Olá sou uma pessoa adulta, tenho", idade, " anos");

  }else ( idade >= 65)

  console.log("Olá sou uma pessoa Idosa, tenho", idade," anos");

}

faixaEtaria ()


// crie um método nesse objeto chamado faixaEtaria,
// que irá imprimir se a pessoa é jovem, adulta ou idosa
// sendo jovem até exatamente 18 anos, adulta até exatamente 64 e idosa acima ou igual 65 anos
// ex: Olá, sou uma pessoa jovem!



// altere a idade da pessoa do objeto para 77 anos e utilize o método que criou para imprimir sua faixa etária
