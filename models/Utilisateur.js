const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../util/database");


const Utilisateur = sequelize.define('Utilisateur', {
    niveau: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    // Other model options go here
  });

  module.exports = Utilisateur;    