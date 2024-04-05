/*
    O método forEach() itera sobre cada elemento de um array 
    e executa uma função de callback para cada elemento.

    Obs: O forEach é muito mais lento comparado ao for tradicional, 
    com muitos elementos é melhor usar o for
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i, listRef) => {
    console.log(value + i)
})