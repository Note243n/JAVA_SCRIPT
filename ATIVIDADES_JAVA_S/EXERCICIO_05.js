const readline = require('readline-sync');

function Valor_inteiro() {
    const numero = readline.questionInt('Digite um numero: ');
    if (numero > -1) {
        console.log(`Positivo`)
}   else {
    console.log(`Negativo`)
}
}
Valor_inteiro()