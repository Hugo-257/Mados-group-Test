const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../util/database");



const Client = sequelize.define('Client', {
    // Model attributes are defined here

  }, {
    // Other model options go here
  });


  module.exports = Client;    