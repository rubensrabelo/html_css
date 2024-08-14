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

    static async editNote(req, res) {
        const id = req.params.id;

        const note = await Note.findOne({where: {id}, raw: true});

        res.render("notes/edit", {note});
    }

    static async editNotePost(req, res) {
        const id = req.body.id;

        const note = {
            title: req.body.title,
            description: req.body.description
        };

        await Note.update(note, {where: {id}});

        res.redirect("/notes");
    }
}