/*
Conhecendo o setTimeout()
Nesta aula, aprenderemos a usar o setTimeout para executar uma função após um intervalo de tempo determinado em milissegundos. A função pode conter ações a serem realizadas após o tempo especificado. O setTimeout recebe como parâmetros a função a ser executada e o tempo em milissegundos. Podemos ajustar esse tempo para controlar quando a função será executada. Essa é uma ótima maneira de agendar ações em JavaScript.
*/

console.log("Iniciando o setTimeout...");

setTimeout(() =>{
    console.log("Eu vou executar depois de 1 segundo!");
}, 1000);
setTimeout(() =>{
    console.log("Eu vou executar depois de 3 segundo!");
}, 3000);

/*
Como usar o setTimeout?

setTimeout(function, tempo);

function: é a função que será executada após o tempo especificado.
tempo: é o tempo em milissegundos que a função será executada após.

Exemplo:

setTimeout(function, tempo);

function(){
    console.log("Eu vou executar depois de 1 segundo!");
}

*/