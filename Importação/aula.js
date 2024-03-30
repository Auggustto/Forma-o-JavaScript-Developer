/*

const { gets, print }: Esta linha está usando destructuring assignment 
para extrair as funções gets e print do objeto exportado pelo módulo './funcoes_auxiliares'.

*/

const { gets, print } = require('./funcoes_auxiliares')

console.log(gets())
console.log(print('Testeeeeee'))
