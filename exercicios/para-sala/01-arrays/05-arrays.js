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
const template = `Bem-vindo ${pessoa.nome.toUpperCase()}`;
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
