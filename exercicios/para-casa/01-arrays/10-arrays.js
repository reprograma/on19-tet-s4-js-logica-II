const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];


//usando splice, substitua uva por cenoura
{
  const fruits = arrayExercicio
  fruits.splice (fruits.indexOf('uva'), 1, 'cenoura')
  console.log (fruits)
}
//usando splice, substitua figo por cebola
{
  const fruits = arrayExercicio
  fruits.splice (fruits.indexOf('figo'), 1, 'cebola')
  console.log (fruits)
}
//usando splice, remova abacaxi
{
  const fruits = arrayExercicio
  fruits.splice (fruits.indexOf('abacaxi'), 1)
  console.log (fruits)
}