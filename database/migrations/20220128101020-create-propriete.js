'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proprietes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title:{
        type:Sequelize.STRING,
        allowNull:false   
      },
      description:{
        type:Sequelize.STRING,
        allowNull:false   
      },
      Prix:{
          type:Sequelize.STRING,
          allowNull:false       
      },
      Lieu:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Chambres:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Douches:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Toilettes:{
          type:Sequelize.STRING,
          allowNull:false
      },      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proprietes');
  }
};