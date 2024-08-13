const {DataTypes} = require("sequelize");

const conn = require("../db/conn");

const Note = conn.define("Note", {
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    },
});

module.exports = Note;