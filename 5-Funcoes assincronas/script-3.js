/*
Conhecendo funções assíncronas
Nesta aula, você vai aprender sobre funções assíncronas e como elas retornam promises ao invés de valores imediatos. Funções assíncronas são úteis quando precisamos lidar com operações que podem demorar, como acessar um banco de dados. Elas retornam uma promessa de que vão processar a solicitação e retornar o resultado. O uso do await em funções assíncronas permite esperar pela resolução da promessa antes de continuar a execução do código. Esses conceitos serão exemplificados na prática durante a aula.
*/

/*
Conhecendo promises
Nesta aula, veremos como criar e utilizar uma promise em JavaScript. Aprenderemos sobre o uso de resolve, reject, then, catch e finally para lidar com o sucesso e falha da promises. O uso correto desses métodos permite controlar o fluxo de execução de operações assíncronas.
*/

function asyncFunction(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true; // Simula a execução de uma operação bem-sucedida
      if (sucesso) {
        resolve("Operação bem-sucedida!"); // Resolve a promise com sucesso
      } else {
        reject("Erro na operação!"); // Rejeita a promise com erro
      }
    }, 2000); // Espera 2 segundos antes de resolver a promise
  });
}

console.log("Iniciando a execução da função assíncrona...");
const response = asyncFunction();
console.log(response); // Aqui, response é uma promise, não o resultado imediato da função assíncrona

//Visualizando o uso de uma promise
asyncFunction().then((result) => {
  console.log(result);
}).catch((error) => {
    console.error(error);
    }).finally(() => {
      console.log("Operação finalizada.");
    }
);