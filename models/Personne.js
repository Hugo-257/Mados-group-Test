const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../util/database");
const Utilisateur=require('./Utilisateur')
const Client=require('./Client')

const Personne = sequelize.define('Personne', {
    // Model attributes are defined here
    
    username: {
      type: Sequelize.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
  });

  /* 1-1 Utilisateur-personne  */
Personne.hasOne(Utilisateur, {
  foreignKey: "idPersonne",
});
Personne.hasOne(Client, {
  foreignKey: "idPersonne",
});

  module.exports = Personne;