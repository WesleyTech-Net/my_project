
function digitarNumero(){
    let numero = parseInt(document.querySelector('#numero').value);
    console.log(numero);

    if (isNaN(numero)){
        alert('🚫 Valor inválido!');
        return null;
    }
    return numero;
}

function calcularFatorial(){
    let calculo = digitarNumero();

    if (!calculo && calculo !== 0){
        return;
    }

    let fatorial = 1;
    for(let i = 2; i <= calculo; i++){
        fatorial *= i;
    }

    document.getElementById('resultado').textContent = `O fatorial de ${calculo} é ${fatorial}`;
}

function limparCampos(){
    numero = document.querySelector('#numero');
    numero.value = '';
    document.getElementById('resultado').textContent = '';
}