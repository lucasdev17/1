//parr nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lucas' ,
    idade: 17,
    peso: 100,
    endereco: {
        logradouro: 'Rua José Francisco Borges',
        numero: 515
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)