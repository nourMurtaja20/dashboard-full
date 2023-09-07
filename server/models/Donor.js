const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Donor = sequelize.define("donor", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    imageSrc: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    ,
    donorName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    scopeOfWork: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    focusCountry: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    about: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    workHistory: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isSave: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});
module.exports = Donor; 