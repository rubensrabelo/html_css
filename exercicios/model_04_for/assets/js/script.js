array_de_objetos = [
    {"tag": "h1", "texto": "Com frase com um 1"},
    {"tag": "h2", "texto": "Com frase com um 1"},
    {"tag": "h3", "texto": "Com frase com um 1"},
    {"tag": "h4", "texto": "Com frase com um 1"},
    {"tag": "h5", "texto": "Com frase com um 1"},
    {"tag": "h6", "texto": "Com frase com um 1"},
    {"tag": "p", "texto": "Com frase com um 1"},
]

const div = document.querySelector(".resultado");

for(objeto of array_de_objetos){
    const elemento = document.createElement(objeto["tag"]);
    elemento.innerHTML = objeto["texto"];

    div.appendChild(elemento);
}