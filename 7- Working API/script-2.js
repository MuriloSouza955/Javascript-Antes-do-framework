/*
Utilizando o fetch
Nesta aula, veremos como consumir uma API utilizando JavaScript e a função fetch. Aprenderemos como definir o endereço da API, lidar com promises, obter informações da requisição e converter a resposta para JSON. Veremos a importância de lidar com requisições assíncronas e como utilizar o método .then para tratar os dados retornados pela API.
*/

fetch('http://localhost:3000/produtos')
.then((response) => response.json())
.then((data) => {
    console.log(data);
})