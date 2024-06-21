const express = require("express");
const path = require("path");

const userRouter = require("./router/user")

const app = express();
const port = 5000;

const basePath = path.join(__dirname, "templates");

app.use(express.urlencoded({
    extended: true,
}),);

app.use(express.json());

app.use(express.static("public"));

app.use("/user", userRouter);

app.get("/user/add", (req, res) => {
    res.sendFile(`${basePath}/userFormulario.html`)
});

app.post("/user/save", (req, res) => {
    const nome = req.body.nome;

    res.send(`Seja bem-vindo, ${nome}!`)
});

app.get("/user", (req, res) => {
    res.sendFile(`${basePath}/user.html`)
});

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}/`)
})
