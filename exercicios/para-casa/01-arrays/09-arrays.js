const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// inverta a ordem da array com .reverse()
{
  const fruits = arrayExercicio
  fruits.reverse();
  console.log ('reversa', fruits)
}
// coloque a array em ordem alfabética
{
  function sorter (a, b){
    let value = 0
    if (a > b){
      value = 1
    }
    if (a < b){
      value = -1;
    }
    return value
  }

  const fruits = arrayExercicio
  fruits.sort(sorter);
  console.log ('alfabetica', fruits);
}
// coloque a array em ordem alfabética decrescente z -> a
{
  {
    function sorter (a, b){
      let value = 0
      if (a > b){
        value = 1
      }
      if (a < b){
        value = -1;
      }
      return value
    }
  
    const fruits = arrayExercicio
    fruits.sort(sorter);
    fruits.reverse();
    console.log ('contra-alfabetica', fruits);
  }
}