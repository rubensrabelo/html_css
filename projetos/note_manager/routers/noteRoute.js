const express = require("express");

const NoteController = require("../controllers/NoteController");

const router = express.Router();

router.post("create", NoteController.createNotePost);
router.get("/create", NoteController.createNote)
router.get("/", NoteController.showAllNotes);

module.exports = router;