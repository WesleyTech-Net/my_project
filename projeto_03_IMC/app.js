function digitarPesoMedida(){
    
    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);

    if (isNaN(altura) || isNaN(peso)){
        alert('Valor inválido. Tente novamente...');
        return null;
    }
    return [altura, peso];
}

function calcularImc(){
    let medidas = digitarPesoMedida();

    if (!medidas){
        return;
    }

    let calculo = (medidas[1] / (medidas[0] ** 2));

    if(calculo < 18.5){
        document.getElementById('resultado').textContent = `SEU IMC: ${calculo.toFixed(2)} kg/m². Classificação: MAGREZA`;
    } else if (calculo >= 18.5 && calculo < 25){
        document.getElementById('resultado').textContent = `SEU IMC: ${calculo.toFixed(2)} kg/m². Classificação: NORMAL`;
    } else if (calculo >= 25 && calculo < 29.9){
        document.getElementById('resultado').textContent = `SEU IMC: ${calculo.toFixed(2)} kg/m². Classificação: SOBREPESO`;
    } else if (calculo >= 30 && calculo < 39.9){
        document.getElementById('resultado').textContent = `SEU IMC: ${calculo.toFixed(2)} kg/m². Classificação: OBESIDADE`;
    } else if(calculo > 40){
        document.getElementById('resultado').textContent = `SEU IMC: ${calculo.toFixed(2)} kg/m². Classificação: OBESIDADE GRAVE`;
    }

    
}

function limparDados(){
    let altura = document.querySelector('#altura');
    altura.value = '';
    
    let peso = document.querySelector('#peso');
    peso.value = '';
   
    document.getElementById('resultado').textContent = '';
}