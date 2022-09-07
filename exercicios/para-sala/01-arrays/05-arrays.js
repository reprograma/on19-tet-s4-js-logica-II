console.clear();
const frase = "Eu sou uma frase com algumas palavras";

const trocado = frase.replace("algumas", "poucas");
console.log(trocado);

const trocado2 = frase.replace("uma frase", "um texto");
console.log("\n" + trocado2);

const pessoa = {
  nome: "Fulana",
  genero: "feminino"
}
<<<<<<< HEAD
const template = `Bem-vindo ${pessoa.nome}`;
=======
const template = `Bem-vindo ${pessoa.nome.toUpperCase()}`;
>>>>>>> e9ecd16a4420e5fa28739fdf33e77acf0f48cb1b
let result;
if (pessoa.genero === "feminino") {
  result = template.replace("Bem-vindo", "Bem-vinda");
}
console.log("\n", result);

// Regex e all
const trocado3 = frase.replace(/a/gi, "A");
console.log("\n", trocado3);

const trocado4 = frase.replaceAll("a", "A");
console.log("\n", trocado4);
