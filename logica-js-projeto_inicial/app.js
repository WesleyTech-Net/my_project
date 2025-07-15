//printa na tela em formad de uma pequena janela de aviso
alert('BEM-VINDO AO JOGO: NÚMERO SECRETO');

//variável para armazenar o número
let numeroSecreto = 15;
console.log('Valor do chute: ' + numeroSecreto);
//input para pedir a escolha do número para o usuário 
let escolha = prompt('Escolha um número entre 1 e 30: ');

console.log('Resultado da comparação: ', escolha == numeroSecreto);


//condição caso a escolha seja igual ao número secreto ou não seja igual ao número secreto 
if (escolha == numeroSecreto) {
    //console.log é uma ferramenta para desenvolvimento, e não para usuários!
    //utilize a crase para fazer a formatação
    alert(`Parabéns você acertou o número secreto ${numeroSecreto}!`);
} else {
    alert('Você errou! :(');
    console.log('O valor do chute era ' + numeroSecreto);
}