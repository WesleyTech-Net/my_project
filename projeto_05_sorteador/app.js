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
    let sortear = limiteDeNumeros();

    if(!sortear){
        return;
    }
    console.log(sortear)
}

function limparDados(){
    let numeroMinimo = document.querySelector('#min-number');
    numeroMinimo.value = '';

    let numeroMaximo = document.querySelector('#max-number');
    numeroMaximo.value = ''; 
}