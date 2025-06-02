/*
Exportação padrão ou nomeada
Nessa aula, veremos a diferença entre exportação padrão e nomeada em JavaScript. Veremos como exportar funções nomeadas e a função padrão, e como importá-las de forma separada. Destacaremos que a exportação default não requer chaves ao importar e que as funções nomeadas precisam ser importadas pelo nome exato.

*/

// pouco importa o nome da função default
import batata, {multiply} from './calc.js';

console.log( "4 + 6 = ", batata(4, 6) );
console.log( "4 * 6 = ", multiply(4, 6) );