const express = require("express");

const NoteController = require("../controllers/NoteController");

const router = express.Router();

router.post("/create", NoteController.createNotePost);
router.get("/create", NoteController.createNote);
router.get("/edit/:id", NoteController.editNote);
router.post("/edit", NoteController.editNotePost);
router.post("/delete", NoteController.deleteNote)
router.get("/", NoteController.showAllNotes);

module.exports = router;