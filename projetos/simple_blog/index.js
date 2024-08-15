const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./db/conn");
const Post = require("./models/Post");

const postRouter = require("./router/postRouter");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("public"));

// app.use("/posts", postRouter);

// >>>>>>>>>>>>>>>>> FINALIZEI A CONFIGURAÇÃO

conn
.sync()
.then(() => {
    app.listen(3000, () => {
        console.log("Server is running!")
    });
})
.catch((err) => console.log(err));