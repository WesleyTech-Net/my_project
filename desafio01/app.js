let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicandoConsole(){
    console.log('O botão foi clicado');
}

function clicandoAlerta(){
    alert('Eu amo JS!');
}

function clicandoCidade(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function clicandoSoma(){
    let valor1 = prompt('Insira o primeiro valor: ');
    let valor2 = prompt('Insira o segundo valor: ');
    resultado = parseInt(valor1) + parseInt(valor2);
    alert(`O resultado da soma entre ${valor1} + ${valor2} = ${resultado}`);
    
}