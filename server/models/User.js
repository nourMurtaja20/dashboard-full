const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const User = sequelize.define("user", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    Fname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Lname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.ENUM('freelancer', 'client'),
        allowNull: false,
    },
    isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});
module.exports = User; 