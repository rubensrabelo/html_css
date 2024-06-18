document.addEventListener("DOMContentLoaded", () => {
    const dataAtual = new Date();

    const diaDaSemana = nomeDiaDaSemana(dataAtual.getDay() + 1);
    const dia = dataAtual.getDate();
    const mes = nomeMes(dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();

    exibirNaTela(diaDaSemana, dia, mes, ano, hora, minuto);
});

function exibirNaTela(diaDaSemana, dia, mes, ano, hora, minuto){
    const div = document.querySelector(".main-content");
    div.innerHTML = `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}`;
}

function nomeMes(numeroMes) {
    switch(numeroMes){
        case 1:
            return "Janeiro";
            break;
        case 2:
            return "Fevereiro";
            break;
        case 3:
            return "Março";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maio";
            break;
        case 6:
            return "Junho";
            break;
        case 7:
            return "Julho";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Setembro";
            break;
        case 10:
            return "Outubro";
            break;
        case 11:
            return "Novembro";
            break;
        case 12:
            return "Dezembro";
            break;
        default:
            return "Mes invalido!"
            break;
    }
}

function nomeDiaDaSemana(numeroDiaDaSemana) {
    switch(numeroDiaDaSemana){
        case 1:
            return "domingo-feira";
            break;
        case 2:
            return "segunda-feira";
            break;
        case 3:
            return "terça-feira";
            break;
        case 4:
            return "quarta-feira";
            break;
        case 5:
            return "quinta-feira";
            break;
        case 6:
            return "sexta-feira";
            break;
        case 7:
            return "sábado-feira";
            break;
        default:
            return "Semana inválida!"
            break;
    }
}