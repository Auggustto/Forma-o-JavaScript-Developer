/*
Refatorando o exercicio 4

Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento. 

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- 1 À vista Débito, recebe 10% de desconto;
- 2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3 Em duas vezes, preço normal de etiqueta sem juros;
- 4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

function calcularDesconto(valor, desconto) {

    return (valor - (valor * (desconto / 100)));
}

function calcularJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

function formaPagamento(condicaoPagamento, valorProduto) {

    if (condicaoPagamento === 1) {
        return calcularDesconto(valorProduto, 10);

    } else if (condicaoPagamento === 2) {
        return calcularDesconto(valorProduto, 15);

    } else if (condicaoPagamento === 3) {
        return valorProduto;

    } else {
        return calcularJuros(valorProduto, 10);
    }
}

(function () {
    const condicaoPagamento = 1
    const valorProduto = 100;

    console.log(calcularDesconto(valorProduto, condicaoPagamento))
})();
