/*
Conhecendo async e await
Neste vídeo, veremos como utilizar async e await para lidar com funções assíncronas. Vamos aprender como utilizar async antes da função para lidar com await, aguardando a resolução ou rejeição da promise. Também vamos aprrender como lidar com exceções utilizando try, catch e finally.
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

async function fetch1(){
  const response = await asyncFunction();
  console.log(response);
}

// Utilizando arow function
const fetch2 = async () => {
  const response = await asyncFunction();
  console.log(response);
}

//Utilizando try, catch e finally
async function fetch3(){
  try{
    const response = await asyncFunction();
    console.log(response);
  }catch(error){
    console.error(error);
  }finally{
    console.log("Operação finalizada.");
  }
}

fetch1();
fetch2();
fetch3();