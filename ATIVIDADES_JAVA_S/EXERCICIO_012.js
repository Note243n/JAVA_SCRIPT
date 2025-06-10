console.clear()
const readline = require('readline-sync');

const numeros = []

for (let i = 0; i < 5; i++) {
    let numero = readline.questionInt('Digite seu primeiro numero:');
    numeros.push(numero);
}

const negativos = numeros.filter(numero => numero < 0);
const positivos = numeros.filter(numero => numero > 0);

console.clear()
console.log("Quantidade de numeros negativos: ", negativos.length);

const soma = positivos.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});
console.log("Soma dos positivos", soma);

