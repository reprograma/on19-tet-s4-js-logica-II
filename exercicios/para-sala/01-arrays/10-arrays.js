console.clear();
// inserindo e deletando itens
// push(item) = adiciona ao final
// pop() remove do final
// unshift(item) adiciona no inicio
// shift() remove do inicio

const arrayExemplo = [];

arrayExemplo.push("Opalão");
console.log("Push: ", arrayExemplo);

arrayExemplo.push("Chevet");
console.log("Push2: ", arrayExemplo);

arrayExemplo.pop();
console.log("Pop: ", arrayExemplo);

arrayExemplo.unshift("Chevet");
console.log("Unshift: ", arrayExemplo);

arrayExemplo.shift();
console.log("Shift: ", arrayExemplo);
