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
if(pessoa.temCNH = true){
  console.log('Voce tem Hbilitação CNH!');
}
  else{

  console.log("Faltou a habilitação CNH");
  }

// imprima o último apelido da pessoa
if(pessoa.apelidos = "Lana"){
  console.log("Esse é seu ultimo apelido")
}else{

  console.log("Acho que não tem apelido");

}

// Troque o nome da pessoa e imprima, usando somente o objeto

if(pessoa.nome === ("Fulana")){
  pessoa.nome = "Giu";
  console.log("Troquei seu nome para " ,pessoa.nome);

}else{

  console.log("Acho que não deu pra trocar o nome");
}

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
