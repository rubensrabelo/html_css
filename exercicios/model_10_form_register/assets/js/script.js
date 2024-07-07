(function(){
    "use strict";

    const title = document.querySelector("#txtTitle");
    const btnSend = document.querySelector("#btn");
    const formRegister = document.querySelector(".form-register");

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log(title.value);
        
        if(!(title.value)) {
            showFeedback("Title is empty! Please, insert a value.");
            title.focus();
        }
    });

    const txtDescricao = document.querySelector("#txtDescricao");
    const contadorContainer = document.querySelector("#contador");
    const rest = contadorContainer.getElementsByTagName("span")[0];
    const maxCaractere = txtDescricao.maxLength;
    
    rest.innerText = maxCaractere;

    contadorContainer.style.display = "block";

    txtDescricao.addEventListener("input", function () {
        let numberLettersInsert = this.value.length;
        let diffLetters = Number(maxCaractere) - numberLettersInsert;

        rest.innerText = diffLetters;
    });

    btn.disabled = true;

    const chkAccept = document.querySelector("#chkAccept");

    chkAccept.addEventListener("change", function() {
        btn.disabled = !this.checked;
    });
})();