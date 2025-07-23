
let numerosSorteados = [];

// função para pegar os valores dentro do input do html
function limiteDeNumeros(){
    let numeroMinimo = parseInt(document.querySelector('#min-number').value);
    let numeroMaximo = parseInt(document.querySelector('#max-number').value);

    if(isNaN(numeroMinimo) || isNaN(numeroMaximo)){
        alert('Valor inválido...')
        return null;
    }
    

    if (numeroMaximo <= numeroMinimo){
        alert('O número máximo deve ser menor que o número mínimo')
        return null;
    }
    

    return [numeroMinimo, numeroMaximo];
}


//função para sortear os números
function sortearNumero(){
    // chama a função limiteDeNumeros para obter os limites
    const limites = limiteDeNumeros();

    //caso os limites sejam inválidos (null), a função para aqui
    if(!limites){
        return;
    }

    //desestrutura os valores minimo e maximo do array retornado da funcao limiteDeNumeros
    const [minimo, maximo] = limites;
    console.log([minimo, maximo]);

    //calcula o total de possibilidades de números entre minimo e maximo
    const totalDePossibilidades = maximo - minimo + 1;

    //verifica se todos os números já foram sorteados

    if(numerosSorteados.length >= totalDePossibilidades){
        alert('Todos os números já foram sorteados!'); //alerta o usuário  
        return;
    }

    let sorteado;
    // loop que continua até encontrar um número que nao foi sorteado
    do{
        sorteado = Math.floor(Math.random() * totalDePossibilidades) + minimo;

    } while(numerosSorteados.includes(sorteado)); //Repete se o número já estiver no array

    //adiciona o número sorteado ao array de já sorteados
    numerosSorteados.push(sorteado);
    
    //exibe o número sorteado na tela
    document.getElementById('resultado').textContent = `NÚMERO SORTEADO: ${sorteado}`;
}

//função para limpar todos os campos de exebição
function limparDados(){
    let numeroMinimo = document.querySelector('#min-number');
    numeroMinimo.value = '';

    let numeroMaximo = document.querySelector('#max-number');
    numeroMaximo.value = ''; 

    document.getElementById('resultado').textContent = '';
}