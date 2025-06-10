console.clear()
const readline = require('readline-sync');

const numeros = []

for (let i = 0; i < 3; i++) {
    let numero = readline.questionInt('Digite seu primeiro numero:');
    numeros.push(numero);
}

console.clear()
console.log(numeros)
const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});
console.log("Media", soma / 3);
