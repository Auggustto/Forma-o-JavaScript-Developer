/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 vareáveis. Sendo elas:
    1° Preço do etanol;
    2° preço da gasolina;
    3° O tipo de combustível que está no seu carro;
    4° Gasto medio de combustivel do carro por km;
    5° Distancia em km da viagem;

    Imprima no console o valor que será gasto para realizar a viagem
*/


const etanol = 5.90;
const gasolina = 6.78;
const gastoMedioKm = 12;
const distanciaViagem = 100;

const tipoConbustivel = "Gasolina";


if (tipoConbustivel === "Gasolina") {

    const litrosConsumidos = distanciaViagem / gastoMedioKm;
    const gasto = litrosConsumidos * gasolina;

    console.log(gasto.toFixed(2));
}
else {

    const litrosConsumidos = distanciaViagem / gastoMedioKm;
    const gasto = litrosConsumidos * etanol;

    console.log(gasto.toFixed(2));
}