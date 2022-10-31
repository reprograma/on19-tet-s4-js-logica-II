// crie um execício que use o find
const arrayPoliglota = [
    {
        id: "myName001",
        nome: "Elisângela",
        sobrenome: "Manuel",
        nomeArtistico: "Elis Brasil"
    },
    {
        id: "myLang002",
        linguaMaterna: "português",
        idiomas: ["inglês", "espanhol", "francês"]
    },
    {
        id: "herName001",
        nome: "Giuliana",
        sobrenome: "Zambotto",
        nomeArtistico: "Giu Zambot"
    },
    {
        id: "herLang002",
        linguaMaterna: "português",
        idiomas: ["inglês", "italiano", "japonês"]
    },
]; 

const idLang = "herLang002";
let findLang = arrayPoliglota.find(idioma => idioma.id === idLang);
console.log(findLang);