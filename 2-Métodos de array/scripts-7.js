/*
Método reduce()
Nesta aula, vamos aprender o método reduce(), utilizado para reduzir um array a um único valor, como por exemplo, somar todos os itens de uma lista. Os parâmetros do reduce() incluem o 
* array original,
* o acumulador,
* o valor da iteração atual,
* o valor inicial e
* o índice (opcional).
*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue, index) => {
    // console.log("Acumulador: ", accumulator);
    // console.log("Valor atual: ", currentValue);
    // console.log("Index: ", index);
    // console.log("Soma atual: ", accumulator + currentValue);
    // console.log("---------------------");
    return accumulator + currentValue;
}, 0);

console.log("Soma total: ", sum);