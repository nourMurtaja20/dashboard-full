const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Question = sequelize.define("question", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    organizationName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    service: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mobileNumber: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    prefferedDeliveryDate:
    {
        type: Sequelize.DATE,
        allowNull: false,
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    requirements: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Question; 