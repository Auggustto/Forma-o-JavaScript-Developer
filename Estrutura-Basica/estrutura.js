

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade}`);
    }
}

function comparadorPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} é ${p2.nome} tem a mesma idade`)
    }
}

const pessoa1 = new Pessoa('Leonardo', 26);
const pessoa2 = new Pessoa('Livia', 22);

comparadorPessoa(pessoa1, pessoa2);
