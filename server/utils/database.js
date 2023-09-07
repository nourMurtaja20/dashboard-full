const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    port: "3306",
    username: "root",
    password: "noor282828",
    database: "wise",
    dialect: "mysql",
});

module.exports = sequelize;