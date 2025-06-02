/*
Conhecendo o strict mode
Nesta aula, vamos aprender sobre o modo estrito do JavaScript, conhecido como strict mode, que ao ser ativado, torna os erros que eram silenciosos em exceções. Vamos ver como o modo estrito pode ajudar a identificar erros, como a questão de variáveis não definidas e parâmetros duplicados em funções. O uso do strict mode é recomendado para evitar problemas comuns de flexibilidade do JavaScript, garantindo um código mais robusto e correto.
*/

// "use strict";

function showMeesage(){
    //Se tirar o let, no modo estrito, o console.log não vai funcionar, porque personName não está definido.
    let personName = "Murilo";
    console.log("Olá " + personName);
}

showMeesage();

class Student{
    get point(){
        return 7;
    }
}

let student = new Student();

//Tentando mudar a propriedade point do objeto Student
// student.point = 10;
console.log(student.point);

// Tentando deletar uma propriedade de um objeto que não posso deletar.
// delete window.document;

//Passando parametros duplicados para uma função
function sum(a, a, c){
    return a + a + c;
}

// O strict mode não permite parâmetros duplicados, então o código abaixo vai dar erro., mas se retirar o modo estrito, o código vai funcionar, mas o valor vai dar errado, pois o parâmetro a é passado duas vezes, e o segundo valor vai sobrescrever o primeiro.
const result = sum(2, 9, 3);
console.log(result);