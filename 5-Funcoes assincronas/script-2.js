/*
Conhecendo o setInterval
Nesta aula, veremos o uso do setInterval em comparação com o setTimeout. O setInterval executa uma função repetidamente em intervalos definidos, ao contrário do setTimeout que executa a função após um determinado tempo. Essa técnica é útil para controlar a execução de funções em intervalos específicos.
*/

console.log("Iniciando o setInterval...");

let value = 10;

const interval = setInterval(() => {
    console.log(value)
    value--;
    if (value <= 0) {
        console.log("Fim da contagem!");
        clearInterval(interval); // Para o setInterval quando value chega a 0
    }
}, 1000);