function obterValores() {
    const numero1 = parseFloat(document.querySelector('#numero1').value);
    const numero2 = parseFloat(document.querySelector('#numero2').value);
    return { numero1, numero2 };
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#mais').addEventListener('click', () => {
        if (!msgErro()) somar();
    });
    document.querySelector('#menos').addEventListener('click', () => {
        if (!msgErro()) subtrair();
    });
    document.querySelector('#vezes').addEventListener('click', () => {
        if (!msgErro()) vezes();
    });
    document.querySelector('#dividir').addEventListener('click', () => {
        if (!msgErro()) dividir();
    });
    document.querySelector('#limpar').addEventListener('click', () => {
        atualizarResultado(null);
        document.querySelector('#numero1').value = '';
        document.querySelector('#numero2').value = '';
    });
});


function msgErro() {
    const msgsErro = document.getElementsByClassName('erro');
    const { numero1, numero2 } = obterValores();
    let erro = false;

    if (isNaN(numero1) || numero1 === 0) {
        erro = true;
        msgsErro[0].innerHTML = "Insira o primeiro número!";
    } else {
        msgsErro[0].innerHTML = "";
    }

    if (isNaN(numero2) || numero2 === 0) {
        erro = true;
        msgsErro[1].innerHTML = "Insira o segundo número!";
    } else {
        msgsErro[1].innerHTML = "";
    }

    return erro;
}

function somar() {
    const { numero1, numero2 } = obterValores();
    const resultado = numero1 + numero2;
    atualizarResultado(resultado);
}

function subtrair() {
    const { numero1, numero2 } = obterValores();
    const resultado = numero1 - numero2;
    atualizarResultado(resultado);
}

function vezes() {
    const { numero1, numero2 } = obterValores();
    const resultado = numero1 * numero2;
    atualizarResultado(resultado);
}

function dividir() {
    const { numero1, numero2 } = obterValores();
    if (numero2 !== 0) {
        const resultado = numero1 / numero2;
        atualizarResultado(resultado);
    } else {
        atualizarResultado('Divisão por zero!');
    }
}

function atualizarResultado(valor) {
    document.querySelector('#resultado').value = valor;
}