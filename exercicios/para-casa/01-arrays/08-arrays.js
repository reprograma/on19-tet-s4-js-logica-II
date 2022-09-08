const dia = 1
const mes = 2
const ano = 2027

// imprima 01/02/2027 usando as constantes acima e padStart para adicionar o zero em dia e mes

//convertendo o number para string, pq o metodo padstart só funciona com strings e não com numbers

let diaStringado = dia.toString()
let mesStringado = mes.toString()

let diaComPadStart = diaStringado.padStart(2, '0')

let mesComPadStart = mesStringado.padStart(2, '0')

let novoAno = `${diaComPadStart}/${mesComPadStart}/${ano}`
console.log(novoAno)
