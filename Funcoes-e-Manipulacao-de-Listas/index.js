/*
    O método join() une todos os elementos de um array em uma única string, 
    separados por um delimitador especificado.
*/

const lista = [{ nome: 'Leonardo' }, { nome: 'Livia' }, { nome: 'Laura' }]
console.log(lista.map((n) => n.nome).join('; '))