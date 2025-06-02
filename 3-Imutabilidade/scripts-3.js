/*
Manipulando objetos imutáveis
Nesta aula, aprenderemos a manipular objetos utilizando o princípio da imutabilidade. Em vez de modificar o objeto original diretamente, criamos um novo objeto com as alterações desejadas. Utilizamos o spread para preservar as propriedades existentes e modificar apenas as desejadas. Também veremos como adicionar novas propriedades e remover propriedades existentes usando o operador de desestruturação. Assim, conseguimos manipular objetos sem modificar o original, mantendo-o intacto.
*/

const book = {
    title: "Objetos iumutaveis",
    category: "Javascript",
    author: {
        name: "Murilo",
        email: "murilo@gmail.com"
    },
}

const updatedBook = {
    ...book,
    category: "JavaScript",
    author: {
        ...book.author,
        name: "Murilo Souza"
    },
    type: "ebook"
}

//original, fica intacto
console.log(book);

//novo objeto, com as alterações
console.log(updatedBook);

// Utilizando operador de desestruturação(rest operator) para remover propriedades.

const { category, ...bookWithoutCategory } = book
console.log(bookWithoutCategory);