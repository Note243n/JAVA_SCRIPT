const readline = require('readline-sync');


numero = readline.questionInt("Digite uma nota: ")
while (numero) {
    if (numero < 0 || numero > 10) {
        numero = readline.questionInt("Digite uma nota: ") 
    } else {
        break
    }
    }
