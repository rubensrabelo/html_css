document.addEventListener("DOMContentLoaded", () => {
    const formularioTarefas = document.querySelector(".formulario");

    const tarefasArmazenadas = localStorage.getItem("tarefas");

    if(tarefasArmazenadas) {
        const tarefasRecuperadas = JSON.parse(tarefasArmazenadas);
        tarefas.push(...tarefasRecuperadas);

        for(let tarefa of tarefas) {
            exibirNaTela(tarefa.tarefa);
        }
    }

    formularioTarefas.addEventListener("submit", processarDados);
});
 
const tarefas = [];

function processarDados(e) {
    e.preventDefault();

    const tarefa = document.querySelector(".display").value;

    tarefas.push({tarefa});

    const tarefasString = JSON.stringify(tarefas)

    localStorage.setItem("tarefas", tarefasString)

    exibirNaTela(tarefa);

    limparDisplay();
}

function exibirNaTela(tarefa) {
    const div = document.querySelector(".areaDeTrabalho");
    
    const li = document.createElement("li");
    li.innerHTML = tarefa;

    div.appendChild(li);
}

function limparDisplay(){
    document.querySelector(".display").value = "";
}