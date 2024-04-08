/*
    Promises em JavaScript são objetos que representam o resultado de uma operação assíncrona. 
    Elas são usadas para lidar com operações assíncronas de maneira mais limpa e legível do que 
    os callbacks encadeados tradicionais. 
*/

const promessaDeNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)

        resolve(numero)
    }, 1000)
});

promessaDeNumeroQualquer
    .then((value) => {
        console.log(value)

        // Podemos interagir com o retorno da promise
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finalizou')
    })