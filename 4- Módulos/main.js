/*
Renomeando as importações
Nesta aula, aprenderemos a renomear a importação de funções em JavaScript. É importante renomear as importações para evitar conflitos de nomes com funções já existentes. Podemos renomear as importações para letras ou palavras diferentes, tornando o código mais claro e organizado. Renomear a importação é útil quando importamos módulos com nomes semelhantes aos que já estamos utilizando. Essa prática ajuda a evitar conflitos e a manter o código mais legível.
*/

// pouco importa o nome da função default
import {sum as soma, multiply as multi} from './calc.js';

console.log( "4 + 6 = ", soma(4, 6) );
console.log( "4 * 6 = ", multi(4, 6) );

// caso nao tivesse renomeado a funçao, poderia dar erro, pois ja existe uma funçao com o nome multiply
function multiply(a, b) {
    return a * b;
}