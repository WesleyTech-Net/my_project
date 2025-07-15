let nome = 'Wesley';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'JOGO DA ADVINHAÇÃO');
exibirTextoNaTela('h2', `Seja Bem-Vindo ${nome}`);

let numero = 4;
function dobro(numero){
    return numero * 2;
}

let valor1 = 45;
let valor2 = 55;
let valor3 = 42;
function media (valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3;
}

let numero1 = 6;
let numero2 = 8;
function maiorNumero(numero1, numero2){
    if (numero1 > numero2){
        return numero1;
    } else {
        return numero2;
    }
}

let mult = 55;

function multiplicacao(mult){
    return mult * mult;
}