/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;
    distanciaViagem;
    precoCombustivel;

    constructor(marca, cor, gastoMedioKm, distanciaViagem, precoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
        this.distanciaViagem = distanciaViagem;
        this.precoCombustivel = precoCombustivel;
    }

    calcularConsumo() {
        const litrosConsumidos = this.distanciaViagem / this.gastoMedioKm
        const gasto = litrosConsumidos * this.precoCombustivel

        return gasto
    }

}


const carro1 = new Carro('Volvo', 'Preto', 1 / 18, 200, 5.90)
console.log(carro1.calcularConsumo().toFixed(2))