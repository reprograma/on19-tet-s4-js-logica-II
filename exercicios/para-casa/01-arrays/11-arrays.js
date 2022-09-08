const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

const fruits = arrayExercicio

// adicione no array uma fruta usando push
{
  fruits.push ('laranja')
  console.log ('1-',fruits)
}
// remova o último item da array usando pop
{
  fruits.pop();  
  console.log ('2-',fruits)
}
// adicione uma fruta ao início da array usando unshift
{
  fruits.unshift('laranja')
  console.log ('3-',fruits)
}
// remova o primeiro item da array usando shift
{
  fruits.shift();
  console.log ('4-',fruits)
}
// a array resultante deverá ser igual a inicial
