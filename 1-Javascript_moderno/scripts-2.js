/*
Desestruturação de array
Nesta aula, aprenderemos sobre a desestruturação em JavaScript, uma técnica que facilita a extração de dados de arrays e objetos. Vamos aprender como desestruturar um array, pegando valores específicos e ignorando outros. A desestruturação é uma ferramenta poderosa para manipular dados de forma eficiente em JavaScript.
*/

const data = ["Murilo Souza", "murilo@email.com"]

//Desestruturando um array
const [username, email] = data;
console.log(username);
console.log(email);

const fruits = ["banana", "apple", "orange"];

//Desestruturando somente o primeiro elemento do array
const [banana] = fruits;
console.log(banana);

//Desestruturando somente o segundo elemento do array
const [, maçã] = fruits;
console.log(maçã);

// Pegando apenas o terceiro elemento do array
const [, , terceiro] = fruits;
console.log(terceiro);