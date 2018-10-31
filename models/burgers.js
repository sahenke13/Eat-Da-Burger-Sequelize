const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const Burger = sequelize.define('Burger',{
    Burger: Sequelize.STRING,
    Eaten:Sequelize.BOOLEAN

})

Burger.sync();

module.exports = Burger;

