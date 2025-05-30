const readline = require('readline-sync');

function Numeros() {
    const numero1 = readline.questionInt(`Digite um numero: `);
    const numero2 = readline.questionInt(`Digite outro numero: `);
console.log(`Sua Media é ${(numero1 + numero2) / 2}`)

}
Numeros()