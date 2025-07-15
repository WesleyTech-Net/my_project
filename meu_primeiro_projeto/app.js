
//função para buscar os valores dos inputs dentro do HTML. Não precisa de parâmetros por que is dados notas já estão no HTML
function receberNotas(){
    let nota1 = parseFloat(document.querySelector('#nota1').value);//('#nota1') siginifica que vai buscar a ID específica com no nome nota1
    let nota2 = parseFloat(document.querySelector('#nota2').value);

    //condição pedindo se isNan - não for numérico então alerta o usuário
    if (isNaN(nota1) || isNaN(nota2)){
        alert('Valor inválido. Insira as duas notas corretamente!');
        return null; // se não for válido não retorna nada. A função calcularMedia() vai saber que deve parar.
    } 
    return [nota1, nota2]; // se for válido retorna
}

function calcularMedia(){
    let notas = receberNotas();//chamar a função receberNotas() para dentro da função calcularMedia(), para conseguir realizar o cáculo de média
    
    //verifica se o usuário escreveu um texto ao vez de número ou se deixou alguma campo vazio 
    if (!notas){
        return;
    }

    let media = (notas[0] + notas[1]) / 2;//calculo da média
    alert(`A média das notas é ${media.toFixed(1)}`);//caixa de alerta exibindo a media com 1 casa decimal (media.toFixed(1))
}

function limparCampos(){
    nota1 = document.querySelector('#nota1');
    nota1.value = '';

    nota2 = document.querySelector('#nota2');
    nota2.value = '';
}