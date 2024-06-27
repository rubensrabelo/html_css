document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", exibirNaTela);
});

function exibirNaTela(e) {
    e.preventDefault();

    const div = document.querySelector(".validacao");
    div.innerHTML = "Seu e-mail foi cadastrado com sucesso!";
}