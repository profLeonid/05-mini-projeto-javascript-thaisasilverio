'use strict'

document.addEventListener('DOMContentLoaded', function() {
    
    const inputInicio = document.getElementById('inicio');
    const inputFim = document.getElementById('fim');
    const inputSalto = document.getElementById('salto');
    const botao = document.querySelector('button');
    const lista = document.getElementById('lista-resultado');
    
   
    function gerarContagem() {
        
        // Pega os valores dos inputs e converte para número inteiro
        const inicio = parseInt(inputInicio.value);
        const fim = parseInt(inputFim.value);
        const salto = parseInt(inputSalto.value);
        
        
        lista.innerHTML = '';
        
     
        if (isNaN(inicio) || isNaN(fim) || isNaN(salto)) {
            alert('Por favor, preencha todos os campos com números válidos!');
            return;
        }
        
        if (salto <= 0) {
            alert('O salto deve ser maior que zero!');
            return;
        }
        
        if (inicio > fim) {
            alert('O início não pode ser maior que o fim!');
            return;
        }
        
      
        for (let i = inicio; i <= fim; i += salto) {
            
            const li = document.createElement('li');
            li.textContent = i;
            lista.appendChild(li);
        }
    }
    
    botao.addEventListener('click', gerarContagem);
    
});