//  Importando as funções

const { tabuada, validarValores, numeroPar } = require('./funcoes_exercicios')


const listaValores = [100, 150, 4, 90, 200, 1];

console.log(`FUNÇÃO TABUADA:`, tabuada(5))
console.log(`FUNÇÃO VALIDAR VALORES:`, validarValores(listaValores))
console.log(`FUNÇÃO VALIDAR NUMERO PAR:`, numeroPar(listaValores))
