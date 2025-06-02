/*
Método every()
Nessa aula vamos aprender sobre o método every() que verifica se todos os elementos de um array atendem a uma condição, retornando um valor booleano. Por exemplo, ao verificar se todas as idades em um array são maiores ou iguais a 18, o resultado será false se houver pelo menos um valor abaixo de 18. O uso do console.log ajuda a visualizar o resultado.
*/

const ages = [18, 20, 25, 30, 15];
const ages2 = [18, 20, 25, 30, 19];
// Verifica se todas as idades são maiores ou iguais a 18
const allAdults = ages.every((age) => age >= 18);
const allAdults2 = ages2.every((age) => age >= 18);

console.log(allAdults);
console.log(allAdults2);