console.clear();
//declarando arrays
const listanumeros = [1,2,3,4,5];
const listasTextos = ["Banana, maça, pera"];
const Listamista = [ 55, "olá,", true, undefined];
const Objetos = [{nome: "Lari" }, { nome: "Leonel" }];
const ListaArrays = [
    ["SUSHI", "OVOS"],
    ["Pão integral", "Whey protein"]
]
// acessando arrays
console.log("Lista numeros", listanumeros[0])
console.log("Lista textos", listasTextos[2])
console.log("lista mista", Listamista[2])
console.log("lista de objetos", Objetos[1].nome)
console.log("lista arrays", ListaArrays[0][0], ListaArrays[1][0])