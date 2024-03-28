/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade 
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/


const nota_1 = 12;
const nota_2 = 2;
const nota_3 = 2;

const media = (nota_1 + nota_2 + nota_3) / 3;;


if (media < 5) {

    console.log("REPROVADO:", media.toFixed(2));
}
else if (media >= 5 && media <= 7) {

    console.log("RECUPERAÇÃO:", media.toFixed(2));
}
else {

    console.log("PASSOU DE SEMESTRE:", media.toFixed(2));
}