const express = require("express");
const router = express.Router();

const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.use(express.urlencoded({
    extended: true,
}),);

router.use(express.json());

router.use(express.static("public"));

router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/userFormulario.html`)
});

router.post("/save", (req, res) => {
    const nome = req.body.nome;

    res.send(`Seja bem-vindo, ${nome}!`)
});

router.get("/", (req, res) => {
    res.sendFile(`${basePath}/user.html`)
});

module.exports = router;