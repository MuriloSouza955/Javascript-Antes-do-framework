// Funcão default é exportada por padrão
export default function sum(a, b){
    return a + b;
}

// named exports - cada método é importado pelo seu próprio nome de exportação
export function multiply(a, b){
    return a * b;
}
