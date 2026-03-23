'use strict'

function criarLinha(linha) {
    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdMes = document.createElement('td')
    tdMes.textContent = linha.mes

    const tdJurosMes = document.createElement('td')
    tdJurosMes.textContent = linha.juros
    tdJurosMes.className = 'col-juros'

    const tdParcela = document.createElement('td')
    tdParcela.textContent = linha.parcela

    const tdTotalMes = document.createElement('td')
    tdTotalMes.textContent = linha.totalMes
    tdTotalMes.className = 'col-total'

    const tdSaldoDevedor = document.createElement('td')
    tdSaldoDevedor.textContent = linha.saldoDevedor
    tdSaldoDevedor.className = 'col-saldo'

    tr.appendChild(tdMes)
    tr.appendChild(tdJurosMes)
    tr.appendChild(tdParcela)
    tr.appendChild(tdTotalMes)
    tr.appendChild(tdSaldoDevedor)

    tabela.appendChild(tr)
}

function simularFinanciamento() {
    const valorTotal = Number(document.getElementById('valor-total').value)
    const taxaJuros = Number(document.getElementById('taxa-juros').value)
    const numeroParcelas = Number(document.getElementById('numero-parcelas').value)

    let saldoDevedor = valorTotal

    // limpa tabela antes de simular novamente
    document.getElementById('tabela').innerHTML = ""

    for (let i = 1; i <= numeroParcelas; i++) {
        const jurosMes = saldoDevedor * (taxaJuros / 100)
        const parcela = valorTotal / numeroParcelas
        const totalMes = parcela + jurosMes

        saldoDevedor = saldoDevedor + jurosMes - parcela

        const linha = {
            mes: i,
            juros: jurosMes.toFixed(2),
            parcela: parcela.toFixed(2),
            totalMes: totalMes.toFixed(2),
            saldoDevedor: saldoDevedor.toFixed(2)
        }

        criarLinha(linha)
    }
}

