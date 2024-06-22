const express = require("express");
const exphbs = require("express-handlebars");

const app = express(); 

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



app.get("/dashboard", (req, res) => {
    const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
    const user = {
        name: "Rubens",
        surname: "Rabelo"
    }

    res.render("dashboard", {items, user});
});

app.get("/blog", (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "teste",
            comments: 4,
        }
    ];

    res.render("blog", {posts});
});

app.get("/", (req, res) => {
    const user = {
        name: "Rubens",
        surname: "Rabelo"
    }

    const auth = true;

    res.render("home", {user, auth});
});

app.listen(3000, () => {
    console.log("App rodando!");
});