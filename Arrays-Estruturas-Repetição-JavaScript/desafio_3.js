// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".


const nomes = ['Victor', 'Vitoria', 'Leonardo', 'Livia', 'Laura'];

for (let i = 0; i < nomes.length; i++) {

    if (nomes[i][0] === 'V') {
        console.log(nomes[i]);
    } else {
        console.log(`O nome ${nomes[i]} não começa com a letra V.`);
    }
}