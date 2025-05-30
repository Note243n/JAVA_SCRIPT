console.clear()
const somar = (a, b) => {
    return a + b
}
const subtrair = (a, b) => a - b
const dividir = (a, b) => a / b
const multiplicar = (a, b) => a * b

const soma = somar(2,3)
const subtração = subtrair(2,3)
const divisão = dividir(2,3)
const multiplicação = multiplicar(2,3)


console.log(`Soma: ${soma}`)
console.log(`Subtração ${subtração}`)
console.log(`divisão ${divisão.toFixed(2)}`)
console.log(`Multiplicação ${multiplicação}`)