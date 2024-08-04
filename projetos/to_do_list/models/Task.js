const {DataTypes} = require("sequelize");

const conn = require("../db/conn");

const Task = conn.define("Task", {
    title: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

module.exports = Task;