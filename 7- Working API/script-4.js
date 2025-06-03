/*
Passando parâmetros na requisição
Nesta aula, criaremos uma nova função em JavaScript para buscar um produto específico usando async e o await. Com a interpolação de strings, podemos passar o ID como parâmetro ao chamar a função. Assim, conseguimos buscar produtos específicos de forma dinâmica. É importante entender como passar parâmetros para requisições.
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

fetchProdutoPorId("3");