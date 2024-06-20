document.addEventListener("DOMContentLoaded", () => {
    const botaoIniciar = document.querySelector(".iniciar");
    botaoIniciar.addEventListener("click", () => {
        iniciarCronometro();
    });
    
    const botaoPausar = document.querySelector(".pausar");
    botaoPausar.addEventListener("click", () => {
        pausarCronometro();
    });
    
    const botaoZerar = document.querySelector(".zerar");
    botaoZerar.addEventListener("click", () => {
        zerarCronometro();
    });
});

const div = document.querySelector(".timer");
let seg = 0;
let min = 0;
let hora = 0;
let intervalo;

function iniciarCronometro(){
    intervalo = setInterval(atualizarCronometro, 1000);
}

function pausarCronometro(){
    clearInterval(intervalo);
}

function zerarCronometro(){
    pausarCronometro();
    seg = 0;
    min = 0;
    hora = 0;
    exibirNaTela();
}

function atualizarCronometro(){
    seg++;
    if(seg === 60){
        min++;
        seg = 0;
    };
    if(min === 60) {
        min = 0;
        hora++
    };

    exibirNaTela();
}

function exibirNaTela(){
    div.innerHTML = `${formatarTempo(hora)}:${formatarTempo(min)}:${formatarTempo(seg)}`
}

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}