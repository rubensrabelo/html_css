const express = require("express");
const app = express();

app.use(express.json());

const cursos = ["Node JS", "JavaScript", "React Native"];

app.get("/curso", (req, res) => {
    const nome = req.query.nome;

    return res.json({ curso : `Aprendendo ${nome}`});
});

app.get("/curso/:index", (req, res) => {
    const index = req.params.index;

    return res.json({ curso : `${cursos[index]}`})
});

app.listen(3000);