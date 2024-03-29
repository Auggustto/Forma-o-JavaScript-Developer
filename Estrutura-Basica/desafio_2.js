/*

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        // return `O seu IMC ${this.nome} é :` + this.peso / (this.altura * this.altura)
        const imc = this.peso / (this.altura * this.altura)
        return `O seu IMC ${this.nome} é: ${imc.toFixed(2)}`

    }
}


const pessoa1 = new Pessoa('Jose', 70, 1.75)
console.log(pessoa1.calcularImc())