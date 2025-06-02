/*
Conhecendo rest params
Nesta aula, vamos conhecer o operador rest, representado pelos três pontos, que permite receber um número indefinido de argumentos como um array. Vamos aprender a utilizar o rest em uma função para lidar com múltiplos parâmetros dinâmicos. O rest é útil para lidar com situações em que se deseja nomear apenas alguns parâmetros e lidar com o restante de forma flexível. O operador rest é uma ferramenta poderosa para lidar com múltiplos parâmetros de forma eficiente e flexível.
*/
function values (...args){
    //mostra a quantidade de parametros
    console.log(args.length);
    //mostra os valores dos parametros
    console.log(...args);
    //mostra os valores dos parametros como array
    console.log(args);
}

values(1, 2, 3);