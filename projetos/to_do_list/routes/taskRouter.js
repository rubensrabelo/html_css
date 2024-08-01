const express = require("express");

const TaskController = require("../controllers/TaskController");

const router = express.Router();

router.post("/edit", TaskController.editTaskPost)
router.get("/edit/:id", TaskController.editTask)
router.post("/create", TaskController.createTaskPost)
router.get("/create", TaskController.createTask)
router.get("/", TaskController.showAllTask);

module.exports = router;