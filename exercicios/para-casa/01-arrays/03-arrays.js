// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
if (frase.includes("sou"));
{console.log("palavra SOU encontrada")}
//else 
//{console.log("palavra SOU não encontrada")};


// usando includes, verifique se a frase contém a palavra 'algumas'
if (frase.includes("algumas"))
{console.log("\npalavra ALGUMAS encontrada")}
else
{console.log("palavra ALGUMAS não encontrada")};


// usando includes, verifique se a frase contém a palavra 'cachorro'
if (frase.includes("cachorro"))
{console.log("palavra CACHORRO encontrada")}
else
{console.log("palavra CACHORRO não encontrada")};


// usando includes, verifique se a frase contém a palavra 'amanhã'
if (frase.includes("amanhã"))
{console.log("palavra AMANHÃ encontrada")}
else
{console.log("palavra AMANHÃ não encontrada")};


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
if (arrayExercicio.includes ("banana"))
{console.log("consta a palavra banana na lista")}
else
{console.log("não consta a palavra banana na lista")}

// usando includes, verifique se a array contém a palavra 'figo'
if (arrayExercicio.includes ("figo"))
{console.log("consta a palavra figo na lista")}
else
{console.log("não consta a palavra figo na lista")}

// usando includes, verifique se a array contém a palavra 'macarrão'
if (arrayExercicio.includes ("macarrão"))
{console.log("consta a palavra macarrão na lista")}
else
{console.log("não consta a palavra macarrão na lista")}