let numeroSecreto = gerarNumeroAleatorio();

//melhor prática para o código.
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');//executando a função
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');//executando a função

//função, criando uma funcionalidade para verificar o chute. Determinar alguma ação dentro do programa.
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

//função para gerar o número aleatório
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 50 + 1);
}