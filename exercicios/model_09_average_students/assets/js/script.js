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

        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.innerText = name;

        tr.appendChild(tdName);

        for(let note of totalNotes ) {
            let tdNote = document.createElement("td");
            tdNote.innerText = note;
            tr.appendChild(tdNote);
        }

        const tdAverage = document.createElement("td");
        tdAverage.innerText = average;

        tr.appendChild(tdAverage);

        table.appendChild(tr);

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