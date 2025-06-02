/*
Método some()
Nesta aula, vamos aprender o método some(), que verifica se pelo menos um elemento em um array atende a uma condição definida, retornando um valor booleano. Vamos utilizar um exemplo com um array de idades, onde o método some() foi aplicado para verificar se algum elemento é menor que 18. Se pelo menos um elemento atender à condição, o método retorna verdadeiro. Caso contrário, retorna falso.
*/

const ages = [18, 20, 25, 30, 15];
const ages2 = [18, 20, 25, 30, 19];

const hasAdult = ages.some((age) => age < 18);
const hasAdult2 = ages2.some((age) => age < 18);

console.log(hasAdult);
console.log(hasAdult2);