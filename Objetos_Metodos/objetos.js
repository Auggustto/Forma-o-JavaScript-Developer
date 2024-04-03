/*
    Em JavaScript, objetos são estruturas de dados fundamentais que permitem armazenar e 
    organizar coleções de dados e funcionalidades relacionadas. Eles são compostos por 
    pares de chave-valor, onde as chaves são strings (ou símbolos a partir do ECMAScript 6) 
    e os valores podem ser de qualquer tipo de dados, incluindo outros objetos. Os métodos em JavaScript 
    são funções que estão associadas a objetos e podem ser invocados para realizar operações específicas 
    em relação ao objeto.
*/

/*  
    Em JavaScript, objetos podem ser criados de várias maneiras. Uma maneira comum é usando a sintaxe de 
    objeto literal.
    No exemplo abaixo, carro é um objeto que tem propriedades como marca, modelo, ano, e métodos como ligar e desligar.

*/

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    ligado: false,
    ligar: function () {
        this.ligado = true;
        console.log('O carro está ligado.');
    },
    desligar: function () {
        this.ligado = false;
        console.log('O carro está desligado.');
    }
};


// Acessando Propriedades
console.log(carro.marca); // Saída: Toyota
console.log(carro['modelo']); // Saída: Corolla
