/*Função para pegar o valor de dentro do input */
function valorTotal(){
    let valorMoeda = parseFloat(document.querySelector('#valor').value.trim());

    if(isNaN(valorMoeda) || valorMoeda <= 0){
        alert('Valor Inválido. Tente novamente...')
        return null;
    }

    return valorMoeda;
}

/*Lista com as moedas e taxas */
const taxas = {
    USD: {BRL:5.56, EUR:0.85, CNY:7.18},
    BRL: {USD:0.18, EUR:0.16, CNY:1.29},
    EUR: {BRL:6.49, USD:1.16, CNY:8.35},
    CNY: {USD:0.14, EUR:0.12, BRL:0.78}
}

/*Função para conversão de meodas */
function converterMoeda(){
    let valor = valorTotal();

    if(valor === null){
        return;
    }

    /*variáveis constantes pegadas da lista de seleção criada no HTML*/ 
    const de = document.getElementById('moedaDe').value;
    const para = document.getElementById('moedaPara').value;


    /*Condição caso a escolha da seleção seja a mesma moeda*/
    if(de == para){
        document.getElementById('resultado').textContent = `As moedas selecionadas são as mesmas. Total: ${valor.toFixed(2)} ${para}`
        return;
    }

/*  Tenta acessar a taxa de conversão entre as moedas selecionadas.
     Usa "optional chaining" (?.) para evitar erro caso a moeda de origem não exista. */
    const taxa = taxas[de]?.[para];

    /*Condição caso não exista a conversão selecionada */
    if (!taxa){
        document.getElementById('resultado').textContent = 'Conversão indisponível';
        return
    }

    /*Cálculo para conversão */
    const converterMoeda = valor * taxa;

    document.getElementById('resultado').textContent = `${valor.toFixed(2)} ${de} = ${converterMoeda.toFixed(2)} ${para}`

}

/*Função para limpar todos os dados */
function limparDados(){
    let valorMoeda = document.querySelector('#valor');
    valorMoeda.value = '';
    document.getElementById('moedaDe').selectedIndex = 0;
    document.getElementById('moedaPara').selectedIndex = 0;

    document.getElementById('resultado').textContent = '';
}