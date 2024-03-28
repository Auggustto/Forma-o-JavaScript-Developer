/*
Refatorando o exercicio 2 

1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade 
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/


function calcularNota(nota_1, nota_2, nota_3) {
    return (nota_1 + nota_2 + nota_3) / 3;
}

function validarMedia(media) {
    if (media < 5) {
        return "REPROVADO: " + media.toFixed(2);
    }
    else if (media >= 5 && media <= 7) {
        return "RECUPERAÇÃO: " + media.toFixed(2);
    }
    else {
        return "PASSOU DE SEMESTRE: " + media.toFixed(2);
    }
}


(function () {
    const nota_1 = 10;
    const nota_2 = 9;
    const nota_3 = 3;

    const calcularN = calcularNota(nota_1, nota_2, nota_3);
    console.log(validarMedia(calcularN));
})();

