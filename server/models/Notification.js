const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Notificaton = sequelize.define("notificaton", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    ,
    from: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Notificaton; 