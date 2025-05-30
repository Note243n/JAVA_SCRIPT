const readline = require('readline-sync')

const notas = []

const nota1 = readline.questionFloat('Digite sua primeira nota aqui: ');
const nota2 = readline.questionFloat('Digite sua segunda nota aqui: ');
const nota3 = readline.questionFloat('Digite sua terceira nota aqui: ');

notas.push(nota1)
notas.push(nota2)
notas.push(nota3)

const media = (notas[0] + notas[1] + notas[2]) / 3
console.log(media)