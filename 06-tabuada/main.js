'use strict'

function gerarTabuada() {
    const numero = Number(document.getElementById('numero').value)
    const tabela = document.getElementById('tabela')

    tabela.innerHTML = ""

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i

        const tr = document.createElement('tr')

        const tdExpressao = document.createElement('td')
        tdExpressao.textContent = `${numero} x ${i}`

        const tdResultado = document.createElement('td')
        tdResultado.textContent = resultado

        tr.appendChild(tdExpressao)
        tr.appendChild(tdResultado)

        tabela.appendChild(tr)
    }
}