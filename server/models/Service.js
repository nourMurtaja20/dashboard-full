const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Service = sequelize.define("service", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    serviceName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    details: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    guidance: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    WhyChooseUs: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Pricing: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isSave: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});
module.exports = Service; 