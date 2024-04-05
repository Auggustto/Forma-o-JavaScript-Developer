


const pessoa = {
    nome: "Leonardo",
    idade: 26
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}


/*
    O método apply() é semelhante ao método call(), 
    mas você passa os argumentos como um array.
*/
gritar.apply(pessoa, ['Fazzzz o L'])


/*
    O método call() é usado para chamar uma função, onde você pode definir explicitamente 
    o valor de this e passar os argumentos da função individualmente.
*/
gritar.call(pessoa, 'Fazzzzz O LLLLLL Carai')