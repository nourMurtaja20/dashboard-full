const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Project = sequelize.define("project", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    projectName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    field: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    founderCountry: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    focusCountry: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    deadline: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    about: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    details: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stepsApply: JSON,
    isSave: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});
module.exports = Project; 