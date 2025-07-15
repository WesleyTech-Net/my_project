//printa na tela em formad de uma pequena janela de aviso
alert('BEM-VINDO AO JOGO: NÚMERO SECRETO');

//variável para armazenar o número
let numeroMaximo = 6000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);//escolhe de forma aleatória os números entre 1 e 100
console.log('Valor do chute: ' + numeroSecreto);

//input para pedir a escolha do número para o usuário 
let escolha;
console.log('Resultado da comparação: ', escolha == numeroSecreto);
let tentativas = 1;

//enquanto chute não for igual ao número secreto ficará repetindo
while (escolha != numeroSecreto){

    escolha = prompt(`Escolha um número entre 1 e ${numeroMaximo} : `);
    //condição caso a escolha seja igual ao número secreto ou não seja igual ao número secreto 
    if (escolha == numeroSecreto) {
        //console.log é uma ferramenta para desenvolvimento, e não para usuários!
        //utilize a crase para fazer a 
        // caso seja verdadeiro para o while
        
        break;
    } else {
        if (escolha > numeroSecreto){
            alert(`O número secreto é menor que ${escolha}.`);
        } else {
            alert(`O número secreto é maior que ${escolha}`);
        }
        
    }
    //para incrementar da mesma forma que se faz em python "tentativas += 1"
    tentativas ++;
};

//operador ternario substitui o if e else
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} de ${palavraTentativa}!`);

//if (tentativas > 1){
//    alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} de tentativas!`);
//} else{
//    alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} de tentativa!`);
//}
