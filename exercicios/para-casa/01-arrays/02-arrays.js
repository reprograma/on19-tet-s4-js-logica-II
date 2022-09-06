// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxI",
  "caviar"
];


let index = 0
// Imprima o terceiro item da array e a primeira letra maiúscula
{
  const word = []
  word.push(arrayExercicio[2])
  const answer = word.map((palavra) => palavra[0].toLocaleUpperCase() + palavra.slice(1)).join(" ");

  console.log ("1-", answer)
}
// Imprima o penúltimo item da array e a última letra minúscula
{
  const word = []
  word.push(arrayExercicio[arrayExercicio.length - 2])
  const answer = word.map((palavra) =>  palavra.slice(0, palavra.length - 1) + palavra[palavra.length-1].toLocaleLowerCase()).join(" ");

  console.log ("2-", answer)
}
// Imprima o item do meio da array e a primeira e a última letras maiúscula
{
  const word = []
  word.push (arrayExercicio[Number.parseInt(arrayExercicio.length/2)])
  const answer = word.map((palavra) => palavra[0].toLocaleUpperCase() + palavra.slice(1, palavra.length-1) + palavra[palavra.length -1].toLocaleUpperCase()).join(" ");

  console.log ("3-", answer)
}
// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
{
  const word1 = []
  word1.push (arrayExercicio[2])
  const part1 = []
  for (index = 0; index < word1[0].length; index++){
        part1.push(word1[0][index].toLocaleUpperCase())
  }
  answer1 = part1.join("")

  const word2 = []
  word2.push(arrayExercicio[4])
  const part2 = []
  for (index = word2[0].length-1; index > 1; index--){
    part2.unshift(word2[0][index].toLocaleUpperCase())
  }
  part2.unshift(word2[0].slice(0,2))
  answer2 = part2.join("")
  console.log ("4-","Eu gosto mais de", answer1, "do que", answer2)
}