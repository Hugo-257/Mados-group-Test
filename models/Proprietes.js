const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../util/database");



const Client = sequelize.define('Client', {
    // Model attributes are defined here

    title:{
        type:Sequelize.STRING,
        allowNull:false   
      },
      description:{
        type:Sequelize.STRING,
        allowNull:false   
      },
        prix:{
          type:Sequelize.STRING,
          allowNull:false       
      },
      lieu:{
          type:Sequelize.STRING,
          allowNull:false
      },
      chambres:{
          type:Sequelize.STRING,
          allowNull:false
      },
      douches:{
          type:Sequelize.STRING,
          allowNull:false
      },
  }, {
    // Other model options go here
  });


  module.exports = Client;    