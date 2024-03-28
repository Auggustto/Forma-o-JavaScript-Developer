
const combustivel = 5.90;
const gastoMedio = 13;
const distanciaKmViagem = 1050;

const litrosConsumidos = distanciaKmViagem / gastoMedio;
const gasto = litrosConsumidos * combustivel

console.log(gasto.toFixed(2));
