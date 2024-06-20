const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

app.get("/user/:id", (req, res) => {
    const idUser = req.params.id
    res.send(`Seja bem-vindo, ${idUser}!`);
});

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Site rodando em http://localhost:${port}/`)
});
