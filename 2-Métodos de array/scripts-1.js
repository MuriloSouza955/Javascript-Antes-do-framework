/*
Método map()
Nesta aula, exploraremos o método map() para percorrer e manipular arrays. Com o map(), podemos passar uma função de callback para executar em cada elemento do array original, criando um novo array com base nos retornos. Demonstraremos como percorrer e formatar os itens do array, além de criar um novo array com objetos personalizados. O método map() é útil para manipular arrays e retornar um novo array ao final do processo.
*/

const products = [`Teclado`, `Mouse`, `Monitor`];

//Percorrendo os itens do array
products.map((item) => {
    console.log(item);
});

//Sintaxe reduzida
products.map(item => console.log(item));

//Criando um novo array com objetos
const formatted = products.map(item => {
    // return item.toUpperCase()
    return{
        id: Math.random(),
        name: item,
    }
});

console.log(formatted);