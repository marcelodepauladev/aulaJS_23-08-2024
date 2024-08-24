function somar() {
    if (! validarCampos()) return;

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let resultado = num1 + num2;

    document.getElementById('resultado').value = resultado;
} 
// document.getElementById('#botao').addEventListener('click', somar);

function subtrair() {
    if (! validarCampos()) return;

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let resultado = num1 - num2;

    document.getElementById('resultado').value = resultado;
} 

function multiplicar() {
    if (! validarCampos()) return;

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let resultado = num1 * num2;

    document.getElementById('resultado').value = resultado;
} 

function dividir() {
    if (! validarCampos()) return;

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let resultado = num1 / num2;

    document.getElementById('resultado').value = resultado;
} 

function validarCampos() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let isValid = true;

    if (num1 === "") {
        document.getElementById('num1-error').textContent = 'Preenchimento obrigatório';
        isValid = false;
    } else {
        document.getElementById('num1-error').textContent = '';
    }

    if (num2 === "") {
        document.getElementById('num2-error').textContent = 'Preenchimento obrigatório';
        isValid = false;
    } else {
        document.getElementById('num2-error').textContent = '';
    }

    return isValid;
}

function limpaErro(campo) {
    document.getElementById(campo + '-error').textContent = '';
}