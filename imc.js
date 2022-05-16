const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacaogc = '';

        if (valorIMC < 18.5){
            classificacaogc = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacaogc = 'no peso ideal';
        }else if (valorIMC < 30){
            classificacaogc = ' com sobrepeso.';
        }else if (valorIMC < 35){
            classificacaogc = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacaogc = 'com obesidade grau II';
        }else {
            classificacaogc = 'com obesidade grau III.';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacaogc}`;
    }else {
        resultado.textContent = 'Por favor preencha todos os campos.';
    }
}
calcular.addEventListener('click', imc);