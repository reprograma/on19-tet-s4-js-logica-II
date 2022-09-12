// crie um execício que use o find
const arrayPoliglota = [
    {
        id: "meName001",
        nome: "Elisângela",
        sobrenome: "Manuel",
        nomeArtistico: "Elis Brasil"
    },
    {
        id: "meLang002",
        linguaMaterna: "português",
        idiomas: ["inglês", "espanhol", "francês"]
    },
    {
        id: "sheName001",
        nome: "Giuliana",
        sobrenome: "Zambotto",
        nomeArtistico: "Giu Zambot"
    },
    {
        id: "sheLang002",
        linguaMaterna: "português",
        idiomas: ["inglês", "italiano", "japonês"]
    },
]; 

const idLang = "sheLang002"
let findLang = arrayPoliglota.find(idioma => idioma.id === idLang)
console.log(findLang);