const alunos = ['marta', 'jose', 'maria']
console.log('\nExibindo todos os elementos')
console.log(alunos)

console.log(`\nExibindo apenas o primeiro elemento.`)
console.log(alunos[0])


console.log(`\nExibindo apenas o ultimo elemento`)
console.log(alunos[2])


console.log(`\nadicionando um elemento no final do vetor`)
alunos.push('Ana')
console.log(alunos)


console.log(`\nAdicionando um elemento no começo do codigo`)
alunos.unshift('Marilia')
console.log(alunos)


console.log(`\nremovendo um elemento do final do vetor`)
alunos.pop()
console.log(alunos)


console.log(`\nRemovendo apenas um elemento do vetor`)
alunos.pop(2) // Removendo apenas o terceiro elemento do vetor
console.log(alunos)
