// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.


const lista = [10, 3, 4, 56, 77, 89, 9, 0];

for (let i = 0; i < lista.length; i++) {

    if ((lista[i] % 2) === 0) {
        console.log(`O número ${lista[i]} é par.`)
    } else {
        console.log(`O número ${lista[i]} é Impar.`)
    }
}

