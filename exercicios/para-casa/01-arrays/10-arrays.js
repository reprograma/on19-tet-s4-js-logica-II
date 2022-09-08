const arrayExercicio = [
  "banana", //0
  "pera",  //1
  "uva",   //2  -4
  "maça",  //3
  "figo",  //4
  "abacaxi", //5
  "caviar" //6
];


//usando splice, substitua uva por cenoura
arrayExercicio.splice(2,-4, 'cenoura') 
console.log(arrayExercicio)


//usando splice, substitua figo por cebola
arrayExercicio.splice(4,1, 'cebola')
console.log(arrayExercicio)

//usando splice, remova abacaxi
arrayExercicio.splice(5,1)
console.log(arrayExercicio)