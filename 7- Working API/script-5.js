/*
Fetch com Post
Nesta aula, aprenderemos a utilizar o método POST para enviar dados e cadastrar um novo produto na API. Criaremos um formulário no HTML para coletar informações do usuário e utilizaremos JavaScript para enviar esses dados para a API. Demonstraremos como configurar a requisição fetch com o método POST, definir o tipo de conteúdo como JSON e serializar os dados antes do envio. Ao final, testaremos o cadastro de produtos na API.
*/

async function fetchProduto() {
  const response = await fetch("http://localhost:3000/produtos");
  const data = await response.json();
  console.log(data);
}

async function fetchProdutoPorId(id) {
    const response = await fetch(`http://localhost:3000/produtos/${id}`);
    const data = await response.json();
    console.log(data);
}

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const form = document.getElementsByTagName("form");

addEventListener("submit", async(event) => {
    event.preventDefault()

    fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })
});