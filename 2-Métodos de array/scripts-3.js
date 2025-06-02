/*
Método findIndex()
Nessa aula iremos estudar o método findIndex() que é responsável por retornar o índice do primeiro elemento que satisfaz uma condição em um array. Se nenhum elemento satisfizer a condição, ele retorna "-1". É importante lembrar que o índice retornado começa em 0. O método utiliza uma função de callback para percorrer o array e verificar a condição definida. Caso nenhum elemento satisfaça a condição, ele retorna "-1". O findIndex() é útil para encontrar a posição do primeiro elemento que atende a uma condição específica no array.
*/

const values = [5, 2, 3, 8, 4, 2];

//Retorna o índice do primeiro elemento que é maior que 5
console.log(values.findIndex(value => value > 5));
//Retorna o índice do primeiro elemento que é maior que 4
const index = (values.findIndex(value => value > 4));
console.log(index);
console.log(values[index]); // Retorna o valor do índice

// Quando nao encontra, retorna -1
const index2 = (values.findIndex(value => value > 10));
console.log(index2);