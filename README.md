<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 19 - Todas em Tech  | Back-end | Semana 3 | 2022 | Professora Giu

## Instruções

Antes de começar, vamos organizar nosso setup.

* Fork esse repositório
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

## Resumo

O que veremos na aula de hoje?

* Arrays
* Objetos
* Loops / Iteração

## Conteúdo

### Arrays

Array significa matriz em inglês, as vezes você também pode ver um array ser chamado de vetor ou até lista.

Arrays são declaradas usando []

```js

const arr = ["item 1", "item 2"]

```

Cada item da array tem um índice (sua posição), começando de zero, no exemplo acima o item um tem item zero(0) e o item dois, índice 1;

Para pegar um determinado item de uma array basta selecionar sua posição.

```js

console.log(arr[1]); // irá imprimir 'item 2'

```

O javascript nos provê com muitos métodos para manipulação dessas arrays. Veja mais em:

* [exemplos](https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer)
* [manual mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Objetos

Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos.

O seja, é uma forma de agrupar variáveis de qualquer tipo, podendo ser outros objetos, arrays e até funções (que são chamados de métodos desse objeto);

```js
const pessoa = {
  nome: "Fulana",
  idade: 42,
  genero: "feminino",
  apresentar: function () { console.log(`Olá, me chamo ${this.pessoa}`)}
}

//podemos evocar o valor de uma propriedade usando a notação ponto
console.log(pessoa.idade);

// E usar seus métodos
pessoa.apresentar();
```

Veja mais

* [Básico sobre objetos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics)
* [Trabalhando com objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)

### Loops / Iteração

Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes.

O mais convencional é o loop For de C

```js
for (LET passo = 1; passo <= 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 1 a 5.
  console.log(`Passei aqui ${passo} vezes `);
}
```

Pode ser usado dentro de funções e até dentro de outros loops. Um dos usos mais recorrentes é iterar por arrays:

```js
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

for (LET passo = 0; passo < arrayExercicio.length; passo++) {
  // Executa 5 vezes, com os valores de passos de 1 a 5.
  console.log(`O item ${passo} é ${arrayExercicio[passo]}`);
}
```

Ver mais:

[Manual Mdn](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)

### Exercícios

* [Exercício para casa](/exercicios/para-casa/)

## Links Úteis

* [Documentação Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [JEP: explorador com exemplos](https://jep.vercel.app/)

## Links da prof

* [Todos os Links](https://giuzambot.bio.link/)
* [LinkedIn](https://www.linkedin.com/in/giuzambot/)
* [GitHub](https://github.com/giuzambot)

<center>

Desenvolvido com :purple_heart:

</center>
