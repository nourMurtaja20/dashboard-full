const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Template = sequelize.define("template", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    conceptNote: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    scope: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Reference: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Template; 