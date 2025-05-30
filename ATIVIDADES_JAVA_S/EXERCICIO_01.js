console.clear()
const readline = require('readline-sync');

const A = readline.questionInt('Digite seu primeiro numero: ');
console.clear()

const B = readline.questionInt('Digite seu segundo numero: ');
console.clear()

const C = readline.questionInt('Digite seu terceiro numero: ');
console.clear()

result =  A + B

if (result > C) {
    console.log(`${A} + ${B} = ${result}  é maior que ${C}`)
} else if (result < C) {
    console.log(`${A} + ${B} = ${result}  é menor que ${C}`)
}