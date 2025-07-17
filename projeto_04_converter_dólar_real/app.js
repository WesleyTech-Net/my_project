function valorMoedas(){
    let real = parseFloat(document.querySelector('#real').value);
    let dolar = parseFloat(document.querySelector('#dolar').value);

    if(isNaN(real) || isNaN(dolar)){
        alert('Digite valores válidos. Tente novamente...')
        return null;
    }
    return [real, dolar];
}

function converterMoeda(){
    let converter = valorMoedas();

    console.log(converter)
    if(!converter){
        return;
    }
}