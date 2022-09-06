// crie um exercício que use o find

const meusPets = [
    {
        nome: 'Babete',
        patas: 4,
        olhos: 2,
        adotada: true
    },
    {
        nome: 'Brisa',
        patas: 4,
        olhos: 1,
        adotada: true
    }
]

console.log(meusPets.find(cach => cach.olhos < 2))  
  // { nome: 'Brisa', patas: 4, olhos: 1, adotada: true }