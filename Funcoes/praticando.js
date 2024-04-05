//  Criando uma calculadora com os temas abordados


function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y) {
    console.log(operacao(x, y))
}


calcular(10, multiplicacao, 30)
calcular(15, adicao, 90)