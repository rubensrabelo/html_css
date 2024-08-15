const {Sequelize} = require("sequelize");

const conn = new Sequelize("blog_manager", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

try {
    conn.authenticate();
    console.log("MySQL is running!");
} catch(err) {
    console.log(err);
}

module.exports = conn;