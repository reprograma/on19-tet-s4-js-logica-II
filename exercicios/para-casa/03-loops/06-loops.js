// usando map, converta todas os itens da array para primeira letra maiúscula
const arrayExercicio = [
  'banana',
  'pera',
  'uva',
  'maça',
  'figo',
  'abacaxi',
  'caviar'
]

const mapExercicio = arrayExercicio.map((item, index) => {
  return `${
    item[0].toLocaleUpperCase() + item.slice(1, item.length).toLowerCase()
  }`
})
console.log(mapExercicio)
