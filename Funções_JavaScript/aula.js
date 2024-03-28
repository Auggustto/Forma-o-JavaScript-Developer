

function calcularImc(peso, altura) {

    return peso / (altura * altura)
}

function classificarImc(imc) {

    if (imc < 18.5) {
        return 'Abaixo do peso:' + imc.toFixed(2);
    }
    else if (imc >= 18.5 && imc <= 25) {
        return 'Peso normal:' + imc.toFixed(2);
    }
    else if (imc >= 25 && imc <= 30) {
        return 'Acima do peso:' + imc.toFixed(2);
    }
    else if (imc >= 30 && imc <= 40) {
        return 'Obeso:' + imc.toFixed(2);
    }
    else {
        return 'Obesidade grave:' + imc.toFixed(2);
    }
}


/*
function main() {
    const peso = 71;
    const altura = 1.80;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();
*/

//  Função de tempo de execução, ela é executada imediatamente (Função anonima / sem nome)
(function () {
    const peso = 71;
    const altura = 1.80;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();