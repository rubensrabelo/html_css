const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./db/conn");
const Task = require("./models/Task");

const taskRouter = require("./routes/taskRouter");
const TaskController = require("./controllers/TaskController");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

app.use(express.static("public"));

app.use("/tasks", taskRouter);


conn
//.sync({force: true})
.sync()
.then(() => {
    app.listen(3000, () => {
        console.log("App is running!")
    });
})
.catch((err) => console.log(err));