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
msgConfirmacaoCnh = "Muito bom, você tem CNH";
if(pessoa.temCNH == true) {
console.log(msgConfirmacaoCnh);
};

// imprima o último apelido da pessoa
console.log(pessoa.apelidos[2]);

// Troque o nome da pessoa e imprima, usando somente o objeto
console.log(pessoa.nome.replace("Fulana", "NomeTrocado"));

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
let addGenero = pessoa["genero"] = "feminino";
console.log(pessoa.genero);