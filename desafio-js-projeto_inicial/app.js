let nome = 'Wesley';


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'JOGO DA ADVINHAÇÃO');
exibirTextoNaTela('h2', `Seja Bem-Vindo ${nome}`)
