/*
Renomeando as exportações
Neste vídeo, veremos como renomear exportações em JavaScript. Veremos a diferença entre exportações padrão e nomeadas, mostrando como renomear funções ao exportá-las com nomes diferentes.

*/

// pouco importa o nome da função default
import {soma, multiplicacao} from './calc.js';

console.log( "4 + 6 = ", soma(4, 6) );
console.log( "4 * 6 = ", multiplicacao(4, 6) );