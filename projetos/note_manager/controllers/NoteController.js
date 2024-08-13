const Note = require("../models/Note");

module.exports = class NoteController {
    static async showAllNotes(req, res) {
        const notes = await Note.findAll({raw: true});

        res.render("notes/home", {notes});
    }

    static async createNote(req, res) {
        res.render("notes/create");
    }

    static async createNotePost(req, res) {
        const newNote = {
            title: req.body.title,
            description: req.body.description
        }

        await Note.create(newNote);

        res.redirect("/notes");
    }
}