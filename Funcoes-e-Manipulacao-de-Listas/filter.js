
/*
    O método filter() cria um novo array com todos os elementos 
    que passam no teste implementado pela função fornecida.
*/


const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  Ele cria uma lista nova porém não muda a lista original
const filtraNumerosPar = lista.filter((element) => {
    return (element % 2 === 0)
})
console.log(filtraNumerosPar)
