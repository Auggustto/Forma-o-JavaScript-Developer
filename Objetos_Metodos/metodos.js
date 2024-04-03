/*
    Os métodos em JavaScript são funções associadas a objetos. Eles são definidos como 
    propriedades de um objeto e podem ser invocados da mesma maneira que as funções.

    No exemplo abaixo, saudacao é um método do objeto pessoa, e pode ser chamado usando a 
    notação de ponto (pessoa.saudacao()).
*/

let pessoa = {
    nome: 'João',
    idade: 30,
    saudacao: function () {
        console.log('Olá, meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.');
    }
};

pessoa.saudacao(); // Saída: Olá, meu nome é João e tenho 30 anos.

//  Assim como as propriedades, os métodos podem ser acessados usando a notação de ponto ou colchetes:
let metodo = pessoa['saudacao'];
metodo(); // Saída: Olá, meu nome é João e tenho 30 anos.
