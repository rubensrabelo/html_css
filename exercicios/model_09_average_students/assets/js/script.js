document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        new Student();
    });
});

class Student {
    constructor() {
        const name = document.querySelector(".name").value;
        const notes = document.querySelectorAll(".note");

        this.average(notes);
    }

    average(notes) {
        // Aplicar o reduce para somar tudo
    }
}