/*
Método filter()
Nesta aula, focaremos no método filter(), que cria um novo array com elementos que atendem a uma condição. Demonstraremos como aplicar o filter() em um array de palavras e em um array de objetos.
O método filter() é útil para filtrar elementos de um array e retornar um novo array com apenas os elementos que atendem à condição.
*/

const words = ["Javascript", "HTML", "CSS", "Java", "C++", "Python"];

// Filtarndo palavras com mais de 3 letras
const result = words.filter(word => word.length > 3);

console.log(result);

const products = [
    {
        id: 1,
        name: "Teclado",
        price: 100,
        promotion: true,
    },
    {
        id: 2,
        name: "Mouse",
        price: 70,
        promotion: false,
    },
    {
        id: 3,
        name: "Monitor",
        price: 200,
        promotion: true,
    },
];

// Filtra os produtos que estão em promoção
// e retorna um novo array com esses produtos
const promotedProducts = products.filter(product => product.promotion === true);

console.log(promotedProducts);