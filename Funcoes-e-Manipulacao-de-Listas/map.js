/*
    O método map() cria um novo array com os resultados 
    da função callback aplicada a cada elemento do array.
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}


const lista = [new Pessoa('Leonardo'), new Pessoa('Livia'), new Pessoa('Laura')]

const nomes = lista.map((element) => element.nome)
console.log(nomes)



