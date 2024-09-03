import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.post("/api/product", (req, res) => {
    console.log(req.body);
    res.send("Registing product!");
});

app.get("/api/interfaces", (req: Request, res: Response) => {

    res.send("Using the interfaces!");

});

app.get("/api/json", (req: Request, res: Response) => {
    res.json({
        name: "Shirt",
        price: 30.00
    });
});

app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params);
});

app.listen(3000, () => {
    console.log("Server is running!")
});