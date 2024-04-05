/**
 * O método reduce() executa uma função reducer (provida por você) para cada elemento do array, 
 * resultando em um único valor de retorno.
 */


const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaTodosOsNumeros = lista.reduce((previous, current) => {
    return previous + current
})

console.log(somaTodosOsNumeros)