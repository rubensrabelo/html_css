import express from "express";

const app = express();

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://thispersondoesnotexist.com/" },
    { id: 2, descricao: "Um momento inesquecível", imagem: "https://thispersondoesnotexist.com/" },
    { id: 3, descricao: "Explorando novos horizontes", imagem: "https://thispersondoesnotexist.com/" },
    { id: 4, descricao: "Curtindo a vida ao máximo", imagem: "https://thispersondoesnotexist.com/" },
    { id: 5, descricao: "Um dia cheio de aprendizados", imagem: "https://thispersondoesnotexist.com/" },
    { id: 6, descricao: "Vivendo o agora", imagem: "https://thispersondoesnotexist.com/" },
    { id: 7, descricao: "Mais um dia especial", imagem: "https://thispersondoesnotexist.com/" },
    { id: 8, descricao: "Um clique perfeito", imagem: "https://thispersondoesnotexist.com/" },
    { id: 9, descricao: "Momentos que importam", imagem: "https://thispersondoesnotexist.com/" },
    { id: 10, descricao: "Lembranças que ficam", imagem: "https://thispersondoesnotexist.com/" }
];


app.use(express.json());

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if(post)
        res.status(200).json(post);
    else
        res.status(404).json({error: "Post não encontrado!"});
});

app.listen(3000, () => {
    console.log("Server is running!");
});