console.clear()
//inserindo e deletando itens
//push(item) = adiciona ao final
//pop() remove do final
//unshift(item) adiciona no inici
//shift() remove do inicio

const arrayExemplo = []

arrayExemplo.push("Opalão")
console.log("Push: ", arrayExemplo)

arrayExemplo.push("Chevete")
console.log("Push2: ", arrayExemplo)

arrayExemplo.pop()
console.log("Pop: ", arrayExemplo)

arrayExemplo.unshift("Chevete")
console.log("Unshift: ", arrayExemplo)

arrayExemplo.shift("Chevete")
console.log("Shift: ", arrayExemplo)