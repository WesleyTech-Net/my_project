//printa na tela em formad de uma pequena janela de aviso
alert('BEM-VINDO AO JOGO: NÚMERO SECRETO');

//variável para armazenar o número
let numeroSecreto = 15;
console.log('Valor do chute: ' + numeroSecreto);

//input para pedir a escolha do número para o usuário 
let escolha;
console.log('Resultado da comparação: ', escolha == numeroSecreto);
let tentativas = 1;

//enquanto chute não for igual ao número secreto ficará repetindo
while (escolha != numeroSecreto){

    escolha = prompt('Escolha um número entre 1 e 30: ');
    //condição caso a escolha seja igual ao número secreto ou não seja igual ao número secreto 
    if (escolha == numeroSecreto) {
        //console.log é uma ferramenta para desenvolvimento, e não para usuários!
        //utilize a crase para fazer a formatação
        alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} de tentativa(s)!`);
    } else {
        if (escolha > numeroSecreto){
            alert(`O número secreto é menor que ${escolha}.`);
        } else {
            alert(`O número secreto é maior que ${escolha}`);
        }
        
    }
    //para incrementar da mesma forma que se faz em python "tentativas += 1"
    tentativas ++;
}


