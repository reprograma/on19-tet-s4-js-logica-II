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
const faixaEtaria = (pessoa) => {
  if (faixaEtaria['idade'] <= 18) {
    console.log('Olá, sou uma pessoa jovem!')
  } else if (faixaEtaria['idade'] <= 64) {
    console.log('Olá, sou uma pessoa adulta!')
  } else {
    console.log('Olá, sou uma pessoa idosa!')
  }
}

// altere a idade da pessoa do objeto para 77 anos e utilize o método que criou para imprimir sua faixa etária
for (const key in pessoa) {
  if (key === "idade") {
    pessoa[key] = 77
  }
  console.log(key + ":" + pessoa[key]);
  console.log(pessoa);
}