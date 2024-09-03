const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(cors({credentials: true, origin: "http://localhost:3000"}));

app.use(express.static("public"));

app.use("/users", userRouter);

app.listen(5000);