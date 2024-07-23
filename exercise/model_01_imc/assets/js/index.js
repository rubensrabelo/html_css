document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", app);
});

function app(e) {
    e.preventDefault();

    // Usuário pode enviar algo diferente de um número
    const weight = Number(document.querySelector(".weight").value);
    const height = Number(document.querySelector(".height").value);

    const imc = weight / Math.pow(height, 2);

    // Tranformar numa função
    const div = document.querySelector(".result");
    div.innerHTML += `${imc}<br>`;

    // Transformar numa função
    document.querySelector(".weight").value = "";
    document.querySelector(".height").value = "";

    // Realizar um switch case para o tipo de classifação
}