document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", inserirDadosDosUsuarios);
});

const informacoesUsuarios = [];

function inserirDadosDosUsuarios(e){
    e.preventDefault();

    const nome = document.querySelector(".nome").value;
    const sobrenome = document.querySelector(".sobrenome").value;
    const peso = document.querySelector(".peso").value;
    const altura = document.querySelector(".altura").value;

    const usuario = {
        nome,
        sobrenome,
        peso,
        altura
    };

    informacoesUsuarios.push(usuario);

    exibirInformacaoDoUsuario(usuario);
}

function exibirInformacaoDoUsuario(usuario){
    const div = document.querySelector(".resultado");
    div.innerHTML += `Nome: ${usuario.nome}, Sobrenome: ${usuario.sobrenome}, Peso: ${usuario.peso} kg e Altura: ${usuario.altura} m <br />`
}