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

        this.average(name, notes);
    }

    average(name, notes) {
        const totalNotes = Array.from(notes).map((note) => parseFloat(note.value));
        const sumOfNotes = totalNotes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const averageNote = sumOfNotes / totalNotes.length;

        this.showOnScreen(name, totalNotes, averageNote);
    }

    showOnScreen(name, totalNotes, average) {
        const table = document.querySelector(".table-data-student");

        // Vou ter mandar o nome, as notas (array) e a média

        this.emptyInput();
    }

    emptyInput() {
        document.querySelector(".name").value = "";
        const notes = document.querySelectorAll(".note");
        
        notes.forEach(element => {
            element.value = "";
        });
    }
}