const {Sequelize} = require("sequelize"); 

const conn = new Sequelize(
    "to_do_list",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

try {
    conn.authenticate();
    console.log("MySQL is running!");
} catch(err) {
    console.log(err);
}

module.exports = conn;