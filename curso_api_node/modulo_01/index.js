const express = require("express");
const app = express();

app.use(express.json());

const cursos = ["Node JS", "JavaScript", "React Native"];

app.use((req, res, next) => {
    console.log(`Requisicao Chamada em ${req.url}`);

    return next();
});

function checkCurso(req, res, next){
    if(!req.body.name) 
        return res.status(404).json({error: "O nome do curso é obrigatório."});

    return next();
}

function checkIndex(req, res, next){
    const curso = cursos[req.params.index]

    if(!curso)
        return res.status(404).json({error: "O curso não existe"});

    req.curso = curso;

    return next();
}

app.get("/cursos", (req, res) => {
    return res.json(cursos);
});

app.get("/cursos/:index", checkIndex, (req, res) => {
    return res.json(req.curso)
});

app.post("/cursos", checkCurso, (req, res) => {
    const {name} = req.body;
    
    cursos.push(name);
    
    return res.json(cursos);
});

app.put("/cursos/:index", checkCurso, checkIndex, (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

app.delete("/cursos/:index", checkIndex, (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
});

app.listen(3000);