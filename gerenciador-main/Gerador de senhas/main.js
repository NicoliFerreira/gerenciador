const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}
botoes[1].onclick = aumentaTamanho;

function aumentaTamanho(){ 
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha
}


console.log(botoes);