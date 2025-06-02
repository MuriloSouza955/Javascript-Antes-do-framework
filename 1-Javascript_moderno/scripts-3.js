/*
Desestruturação de objetos
Neste vídeo, aprenderemos sobre desestruturação de objetos em JavaScript. A desestruturação de objetos permite acessar propriedades de um objeto separadamente em variáveis, trazendo flexibilidade e agilidade ao código. Além disso, a desestruturação em funções ajuda a evitar problemas com a ordem dos parâmetros. A prática de desestruturar objetos é útil não apenas para manipular objetos, mas também para tornar o código mais limpo e organizado.
*/

const product = {
    description: "Teclado",
    price: 100,
}

const{description, price} = product;
console.log("Descrição: " + description);
console.log("Preço: R$" + price);

function newProduct({description, price}){
    console.log("### Novo produto ###");
    console.log("Descrição: " + description);
    console.log("Preço: R$" + price);
}

newProduct({
    price: 70,
    description: "Mouse",
});