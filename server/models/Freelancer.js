const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Freelancer = sequelize.define("freelancer", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fieldOfWork: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNo: {
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
    rating: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    about: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    eduction: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    experiences: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    skills: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    cerficates: {
        type: Sequelize.JSON,
        allowNull: false,
    },
});
module.exports = Freelancer; 