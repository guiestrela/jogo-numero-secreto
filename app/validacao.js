function verificaValorValido(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Valor invalido: o numero secreto precisa ser entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!!</h2>
            <h3> O número secreto era ${numeroSecreto}</h3>

            <Button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número screto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número screto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar-novamente') {
        window.location.reload()
    }
} )
