document.addEventListener("DOMContentLoaded", () => {
    const form =  document.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        new Init();
    });
});

class Init {
    constructor(e) {
        const name = document.querySelector(".name").value;
        const sex = document.querySelector(".sex").value;
        const country = document.querySelector(".country").value;

        this.saveUser(
            this.name, this.sex, this.country
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
        const user = this.transformData(
            name, sex, country
        );

        return JSON.stringify(user);
    }
}