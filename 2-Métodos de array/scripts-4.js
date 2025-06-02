/*
Método find()
Nesta aula, abordaremos o método find() em JavaScript, que retorna o valor do primeiro elemento de um array que satisfaz uma condição. Caso nenhum elemento satisfaça a condição, o método retorna "undefined". O find() utiliza uma função de callback para percorrer o array e verificar a condição definida. É importante ressaltar que o find() não altera o array original e é útil para encontrar o primeiro elemento que atende a uma condição específica.
*/

const values = [5, 2, 3, 8, 4, 2, 130, 44];

const found = values.find((value) => value > 10);

console.log(found);

//Exemploc com objetos

const fruits = [
  {
    name: "Banana",
    quantity: 5,
  },
  {
    name: "Orange",
    quantity: 2,
  },
  {
    name: "Apple",
    quantity: 3,
  },
  {
    name: "Mango",
    quantity: 8,
  },
];

const result = fruits.find((fruit) => fruit.quantity > 5);

console.log(result);