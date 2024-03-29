

// const alunos = ['João', 'Leonardo', 'Laura'];

// //  Adicionando um novo item no final da lista
// alunos.push('Laura');

// //  Inserindo um novo item em uma posição especifica
// alunos[2] = 'Livia';

// //  removendo o ultimo item 
// alunos.pop()

// //  Removendo o primeiro item 
// alunos.shift()


// //  Calculando a media 
const notas = [];

notas.push(5);
notas.push(3);
notas.push(4);
notas.push(6);
notas.push(8);

//  Validando o tamanho da lista
// console.log(notas.length);

let soma = 0;

// Estrutura de repetição for
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}
const media = soma / notas.length;
console.log(media);