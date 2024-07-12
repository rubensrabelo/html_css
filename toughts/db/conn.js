const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log("MySQL running");
} catch(err) {
    console.log(`Error - ${err}`);
}

module.exports = sequelize;