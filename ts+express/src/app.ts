import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.post("/api/product", (req, res) => {
    console.log(req.body);
    res.send("Registing product!");
});

app.listen(3000, () => {
    console.log("Server is running!")
});