document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".form");
    formulario.addEventListener("submit", calcular);
});

function calcular(e){
    e.preventDefault();

    const peso = Number(document.querySelector(".peso").value);
    const altura = Number(document.querySelector(".altura").value);

    const imc = peso / Math.pow(altura, 2);

    const msg = `O seu imc foi de ${imc.toFixed(2)}`;
    inserirDadosNaTela(msg);
    inserirDadosNaTela(situacaoIMC(imc));

    limparInputs();
}

function inserirDadosNaTela(msg) {
    const div = document.querySelector(".resultado");
    div.innerHTML += `${msg}<br />`;
}

function situacaoIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III ou mórbida";
    }
}

function limparInputs() {
    document.querySelector(".peso").value = "";
    document.querySelector(".altura").value = "";
}