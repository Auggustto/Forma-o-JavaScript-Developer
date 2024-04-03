/* 
    Coerção de tipos refere-se à conversão automática de valores de um tipo 
    para outro durante a avaliação de expressões. Isso pode acontecer de forma 
    implícita ou explícita.
 */


// Coerção Implícita:
let numero1 = 10;
let texto = 'A soma é: ' + numero1; // Aqui, o número é convertido para string automaticamente
console.log(texto); // Saída: A soma é: 10


// Coerção Explícita:
let numeroString = '10';
let numero2 = parseInt(numeroString); // Convertendo uma string para um número inteiro

console.log(numero2); // Saída: 10