(function(){
    "use strict";

    const title = document.querySelector("#txtTitle");
    const btnSend = document.querySelector("#btn");
    const formRegister = document.querySelector(".form-register");

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log(title.value);
        
        if(!(title.value)) {
            alert("Title is empty! Please, insert a value.");
            title.focus();
        }
    });

    const txtDescricao = document.querySelector("#txtDescricao");
    const contadorContainer = document.querySelector("#contador");
    const rest = contadorContainer.getElementsByTagName("span")[0];
    const maxCaractere = txtDescricao.maxlength;
    
    contadorContainer.style.display = "block";
    
    txtDescricao.addEventListener("keyup", () => {
        console.log("keyup");
    });

    txtDescricao.addEventListener("keydown", () => {
        console.log("keydown");
    });

    txtDescricao.addEventListener("keypress", () => {
        console.log("keypress");
    });

    txtDescricao.addEventListener("input", () => {
        console.log("input");
    });
})();