/*
    Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.

    é feito um link entre a instância do objeto e seu protótipo (sua propriedade __proto__, 
    que é derivada da propriedade prototype no construtor), e as propriedades e os métodos 
    são encontrados percorrendo a cadeia de protótipos.
*/

// Exemplo de herança
const genero = {
    genero: 'Masculino'
}


const pessoa = {
    nome: 'Leonardo',
    idade: 26,
    __proto__: genero
}

console.log(pessoa.genero)





/*
    Outra forma de acessar o protipe
*/
const pessoa2 = {
    nome: 'Leonardo',
}

//  no caso vamos usar Object.create que faz a mesma soisa que método acima
const genero2 = Object.create(pessoa)

// Passando um novo valor para o objeto
genero2.genero = 'Masculino'

console.log(genero2.genero)
