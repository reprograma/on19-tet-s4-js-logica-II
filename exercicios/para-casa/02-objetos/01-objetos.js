console.clear();

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
if (pessoa.temCNH){
console.log("Essa pessoa possui CNH");
}else{
console.log("essa pessoa não possui CNH");
}

// imprima o último apelido da pessoa
console.log(pessoa.apelidos[2]);

// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome="Dafilyn";
console.log(pessoa);

// adicione uma nova propriedade chamada gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero="feminino";
console.log(pessoa);