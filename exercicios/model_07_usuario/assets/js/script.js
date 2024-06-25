document.addEventListener("DOMContentLoaded", () => {
    const form =  document.querySelector(".form");

    const LocalStore = localStorage.getItem("users");

    console.log(LocalStore);

    if(LocalStore) {
        const vetorObjetos = JSON.parse(LocalStore);
        vetorObjetos.forEach(obj => {
            Init.exibirNaTela(obj.name, obj.sex, obj.country);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        new Init();
    });
});

const users = [];

class Init {
    constructor() {
        const name = document.querySelector(".name").value;
        const sex = document.querySelector(".sex").value;
        const country = document.querySelector(".country").value;
        
        let sexCompleted;

        if(sex === "M") sexCompleted = "Masculine"
        else sexCompleted = "Female" 

        this.saveUser(
            name, sexCompleted, country
        );
    }

    transformData(name, sex, country) {
        return {
            name,
            sex,
            country,
        }
    }

    // Vou salvar no LocalStore

    saveUser(name, sex, country) {
        users.push(this.transformData(
            name, sex, country
        ));

        localStorage.setItem("users", JSON.stringify (users));

        Init.exibirNaTela(name, sex, country);
    }

    static exibirNaTela(name, sex, country) {
        const div = document.querySelector(".result");

        const h3 = document.createElement("h3");
        h3.innerHTML = `Name: ${name}`;

        div.appendChild(h3);

        const liSex = document.createElement("li");
        liSex.innerHTML = `Sex: ${sex}`;
        div.appendChild(liSex);

        const liCountry = document.createElement("li");
        liCountry.innerHTML = `Country: ${country}`;
        div.appendChild(liCountry);
    }
}