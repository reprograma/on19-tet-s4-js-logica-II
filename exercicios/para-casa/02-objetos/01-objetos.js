const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// imprima o nome da pessoa
console.log(pessoa.nome);

// imprima de maneira amigável se a pessoa possui CNH
if (pessoa.temCNH = true) {
  console.log(`${pessoa.nome} tem habilitação`);
} else {
  console.log(`${pessoa.nome} não tem CNH`);
}

// imprima o último apelido da pessoa
console.log(`O último apelido de ${pessoa.nome} é ${pessoa.apelidos[2]}`);

// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome = "Leticia";

console.log(pessoa);

// adicione uma nova propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa['genero'] = "feminino";

console.log(pessoa);