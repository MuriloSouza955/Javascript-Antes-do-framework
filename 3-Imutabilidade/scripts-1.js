//Aplicando imutabilidade
//Nesta aula, abordaremos o conceito de imutabilidade na programação. Veremos como a manipulação de objetos pode gerar referências em vez de cópias, levando a alterações inesperadas.

//Criando um objeto com uma propriedade
const adress1 = {
    street: 'Rua dos bobos',
    number: 20
}

// Isso é uma referência, não uma cópia
const adress2 = adress1;

// Alterando o valor da propriedade do objeto adress2
adress2.number = 21;

// Verificando o valor da propriedade do objeto adress1
console.log(adress1);
console.log(adress2);

console.log('--------------------------------');

// Criando um novo objeto com as propriedades do objeto adress1
const adress3 = {...adress1, number: 22}; // Criando um novo objeto com as propriedades do objeto adress1 e alterando o valor da propriedade number

// adress3.number = 22; 

console.log(adress1);
console.log(adress3);

console.log('--------------------------------');

// exemplo com array

const list1 = ['Apple', 'Banana', 'Orange'];

const list2 = list1;

list2.push('Pineapple');

const list3 = [...list1, 'Watermelon'];

console.log(list1, list2, list3);

