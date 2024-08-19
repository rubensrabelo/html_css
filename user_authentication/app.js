const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs-login",
});

db.connect((err) => {
    if(err) {
        console.log(err);  
    } else {
        console.log("MySQL connected ...");
    }
});

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(5000, () => {
    console.log("Server started on Port 5000.");
});