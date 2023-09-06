const numeroSecreto = gerarnumeroAleatorio()

function gerarnumeroAleatorio() {
    return parseInt(Math.random() * 100)
}

console.log('número secreto: ', numeroSecreto)