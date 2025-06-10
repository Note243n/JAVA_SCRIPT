const readline = require('readline-sync');

const numeros = []

for (let i = 0; i < 6; i++) {
    let numero = readline.questionInt('Digite seu primeiro numero:');
    numeros.push(numero);
}

const pares = numeros.filter(numero => numero % 2 === 0);
const impar = numeros.filter(numero => numero % 2 !== 0);

console.log("Números pares:", pares);
console.log("Quantidade de pares:", pares.length);
console.log('Números impares', impar);
console.log('Quantidade de numeros impares', impar.length);