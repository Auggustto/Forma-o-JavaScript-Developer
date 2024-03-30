
// 1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
function tabuada(numero) {

    const listaTabuada = [];

    for (let i = 1; i < 10; i++) {
        const calcular = numero * i;
        listaTabuada.push(calcular);
    }
    return listaTabuada;
}

// 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
// Imprima o maior e o menor número deste conjunto.

function validarValores(listaValores) {

    let maiorNumero = 0;
    let menorNumero = listaValores[0];

    for (let i = 0; i < listaValores.length; i++) {

        if (listaValores[i] > maiorNumero) {
            maiorNumero = listaValores[i];
        }

        if (listaValores[i] < menorNumero) {
            menorNumero = listaValores[i]
        }
    }
    // console.log(maiorNumero, menorNumero);
    return `O maior valor da lista é: ${maiorNumero}. O menor valor da lista é: ${menorNumero}`;
}

// 3) Faça um programa que receba a quantidade de números e seus respectivos valores. Imprima todos os números pares.

function numeroPar(numeros) {

    const listaNumeros = [];

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] % 2 === 0) {
            listaNumeros.push(numeros[i]);
        }
    }
    return listaNumeros;
}

module.exports = { tabuada, validarValores, numeroPar }

