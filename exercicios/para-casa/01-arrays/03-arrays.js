// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
let procurarPalavra1 = "sou";
if (frase.includes(procurarPalavra1)) {
  console.log("opa! achei a palavra ");
} else {
  console.log("não achei a palavra");
}

// usando includes, verifique se a frase contém a palavra 'algumas'

let procurarPalavra2 = "algumas";
if (frase.includes(procurarPalavra2)) {
  console.log("opa! achei a palavra ");
} else {
  console.log("não achei a palavra");
}
// usando includes, verifique se a frase contém a palavra 'cachorro'
let procurarPalavra3 = "cachorro";
if (frase.includes(procurarPalavra3)) {
  console.log("opa! achei a palavra ");
} else {
  console.log("não achei a palavra");
}

// usando includes, verifique se a frase contém a palavra 'amanhã'

let procurarPalavra4 = "amanhã";
if (frase.includes(procurarPalavra4)) {
  console.log("opa! achei a palavra ");
} else {
  console.log("não achei a palavra");
}

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando includes, verifique se a array contém a palavra 'banana'
let fruta1 = "banana";
if (arrayExercicio.includes(fruta1)) {
  console.log(`Sim, contém a fruta ${fruta1}`);
} else {
  console.log("Vish, não achei");
}

// usando includes, verifique se a array contém a palavra 'figo'
let fruta2 = "figo";
if (arrayExercicio.includes(fruta2)) {
  console.log(`Sim, contém a palavra ${fruta2}`);
} else {
  console.log("Vish, não achei");
}

// usando includes, verifique se a array contém a palavra 'macarrão'
let fruta3
if (arrayExercicio.includes(fruta3)) {
  console.log(`Sim, contém a palavra ${fruta3}`);
} else {
  console.log("Vish, não achei");
}