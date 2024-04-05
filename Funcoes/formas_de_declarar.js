/*
    Temos duas caracteristicas principais
    - Function Expression
    - Function Declaration
*/

// Function Declaration
function nomeFuncao() {
    console.log("outro gato")
}

// Function Expression -> Atribuindo a uma variavel 
const nomeDeOutraFuncao = function () {
    console.log("faz o L")
}

nomeFuncao()
nomeDeOutraFuncao()

