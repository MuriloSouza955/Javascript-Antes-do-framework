/*
O que são pacotes?
Pacotes, também conhecidos como bibliotecas, são funcionalidades prontas que podem ser reutilizadas em projetos, economizando tempo e esforço. Eles são distribuídos e mantidos pela comunidade, o que garante atualizações, correção de bugs e novos recursos. Ao utilizar pacotes, nossa aplicação passa a depender deles, e um gerenciador de pacotes ajuda a manter tudo atualizado. Existem diferentes maneiras de incluir pacotes, como injetar um script ou usar um gerenciador de pacotes. Nessa aula vamos entender o conceito de pacotes e sua aplicação prática.
*/

/*
Conhecendo o pacote day.js
Nesta aula, foi abordado o uso do day.js, uma biblioteca popular para lidar com data e hora em JavaScript. A biblioteca oferece diversas funcionalidades prontas, como verificação de datas, adição de dias e conversão de formatos. Vamos aprender a importância de escolher bibliotecas leves para não sobrecarregar a aplicação.
*/

/*
Utilizando o day.js pelo browser
Nesta aula, veremos como utilizar o day.js em um projeto, mostrando a importância de consultar a documentação para entender as funcionalidades disponíveis. Vamos aprender como inserir o pacote no projeto e como utilizar as funcionalidades do day.js, como formatar datas e horas. A exploração da documentação é uma prática essencial para aproveitar ao máximo as bibliotecas e pacotes, facilitando o desenvolvimento e evitando a necessidade de criar funcionalidades do zero.
*/

const now = dayjs();
console.log(now.format('DD/MMM/YYYY HH:mm:ss')); // Formata a data e hora atual