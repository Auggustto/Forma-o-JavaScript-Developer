/*
    As funções construtoras são funções especiais em JavaScript que são usadas para criar objetos.
    Elas são chamadas usando a palavra-chave new e são projetadas para inicializar um novo objeto com
    propriedades e métodos específicos.
*/

//  As funções construtoras sempre começam com letras miusculas
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

// Adicionando um metodo para a função pessoa
Pessoa.prototype.falar = function () {
    console.log(`O meu nome é ${this.nome}`)
}
const p = new Pessoa('Leonardo', 26)
p.falar()



/* 
    Açúcar sintático javascript
    A função abaixo é a mesma coisa que a de cima, foi mudado a sintaxe para parecer mais com as declaraçõs 
    de classes de outras linguagens
*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}