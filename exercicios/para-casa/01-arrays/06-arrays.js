// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";
console.log(frase) // frase original

// usando replace, troque 'sou' por 'não sou'
console.log(frase.replace('sou', 'não sou'))


// usando replace, troque 'algumas' por 'poucas'
console.log(frase.replace('algumas', 'poucas'))


// usando replace, troque 'Eu' por 'Ieu mema'
console.log(frase.replace('Eu','Eu mesma' ))

// usando replaceAll trocar todas as letras a por -
console.log(frase.replaceAll('a', '-'))

// use replace com regex para trocar todas as letras a por -


/* A palavra replace significa substituir. 
É isso o que o método replace() faz, ou seja, substitui um trecho de uma string por
 outro e retorna a operação em uma nova string. É importante lembrar que o método replace() 
 não altera o conteúdo da string original.*/
