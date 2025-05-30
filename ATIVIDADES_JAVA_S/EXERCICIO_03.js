const readline = require('readline-sync');

const numero = readline.questionInt('Digite um numero: ');

switch(numero) {
    case 1:
    case 7:
        console.log(`Final-De-Semana`)
        break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log(`Dia-Util`)
        break
}
