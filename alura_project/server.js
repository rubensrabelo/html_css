import express from "express";

const app = express();

app.get("/api", (req, res) => {
    res.status(200).send("A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});

app.get("/api/book", (req, res) => {
    const book = {
        nome: "Imaginário",
        autor: "Sonhadro",
        anoPublicacao: 2024,
        genero: "Fantasia"
    };

    res.status(200).send(book);
});

app.listen(3000, () => {
    console.log("Server is running!");
});