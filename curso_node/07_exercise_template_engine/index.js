const express = require("express");
const exphbs= require("express-handlebars");

app = express();
const hbr = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("hbs", exphbs.engine({extname: "hbs"}));
app.set("view engine", "hbs");

app.use(express.static("public"))

app.get("/", (req, res) => {
    const products = [
        {
            name: "Camiseta Estampada",
            price: 39.99,
            category: "Roupas",
        },
        {
            name: "Fone de Ouvido Bluetooth",
            price: 89.90,
            category: "Eletrônicos",
        },
        {
            name: "Caneca Personalizada",
            price: 15.50,
            category: "Casa e Decoração",
        }
    ];

    res.render("home", {products});
});

app.listen(3000, () => {
    console.log("Servidor Rodando")
});