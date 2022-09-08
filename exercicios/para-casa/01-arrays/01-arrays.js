// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

/*ARRAYS SIGNIFICA MATRIZES EM PORTUGUÊS :o
Na Matemática, Matriz é uma tabela organizada em linhas e colunas 
no formato m x n, onde m representa o número de linhas (horizontal) e n o número de colunas (vertical).
 A função das matrizes é relacionar dados numéricos.
 ex:[ 0 1 0 1]l=1 c=4*/

 console.clear();
 //                        0          1      2      3       4        5          6
 const arrayExercicio = ["Banana", "Pera", "Uva", "Maça", "Figo", "Abacaxi", "Caviar"];
 //Na maioria da linguagens, a contagem começa com o número zero
 
 //Imprima o primeiro item da array
 console.log('The first item in the array is :', arrayExercicio[0])//banana
 
 // Imprima o segundo item da array
 console.log('The second item of the array is :', arrayExercicio[1])//pera
 
 // Imprima o último item da array
 console.log('The last item in the array is :', arrayExercicio[6])///caviar
 
 
 // Imprima o item do meio da array
 console.log('The middle item of the array is :', arrayExercicio[3]) //maçã
 
 // Imprima "Eu gosto mais de banana do que figo" usando a array no lugar das frutas
 console.log('I like', arrayExercicio[0], "more than", arrayExercicio[4])
 
 
 // Imprima o item que não é uma fruta
 console.log(arrayExercicio[6], "It's not a fruit !") //caviar