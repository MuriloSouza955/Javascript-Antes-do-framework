// Shallow e Deep Copy
// Nesta aula, abordaremos o conceito de shallow copy e deep copy em JavaScript. Veremos que a shallow copy não copia itens aninhados, enquanto a deep copy copia tudo. Veremos exemplos práticos de como realizar cada tipo de cópia e quando é mais adequado utilizá-los. A deep copy é recomendada para objetos mais complexos, como arrays e objetos aninhados, para evitar manipulações indesejadas. É importante compreender esses conceitos para evitar problemas de referência em JavaScript.

const htmlCourse = {
    course: "HTML",
    students: [{
        name: "John",
        email: "john@example.com"
    }],
}

const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
    
}

// Adicionando um novo aluno ao curso de JavaScript, e adiciona também ao curso de HTML, por é uma dopia rasa, não é uma copia profunda
jsCourse.students.push({
    name: "Jane",
    email: "jane@example.com"
});

console.log(htmlCourse, jsCourse);

// Para fazer uma copia profunda

const jsCourse2 = {
    ...htmlCourse,
    course: "JavaScript",
    students: [
        ...htmlCourse.students,
        {
            name: "João",
            email: "joao@example.com"
        }
    ]
}

jsCourse2.students.push({
    name: "Maria",
    email: "maria@example.com"
});

jsCourse2.students = [
    ...htmlCourse.students,
    {
        name: "Catifunda",
        email: "catifunda@example.com"
    }
]

console.log(htmlCourse, jsCourse2);