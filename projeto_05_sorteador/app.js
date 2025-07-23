

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



function sortearNumero(){
    const limites = limiteDeNumeros();

    if(!limites){
        return;
    }

    const [minimo, maximo] = limites;

    console.log([minimo, maximo]);

    const sorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    document.getElementById('resultado').textContent = `NÚMERO SORTEADO: ${sorteado}`;
    
}

function limparDados(){
    let numeroMinimo = document.querySelector('#min-number');
    numeroMinimo.value = '';

    let numeroMaximo = document.querySelector('#max-number');
    numeroMaximo.value = ''; 

    document.getElementById('resultado').textContent = '';
}