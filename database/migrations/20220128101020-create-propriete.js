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
      prix:{
          type:Sequelize.STRING,
          allowNull:false       
      },
      image:{
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
      toilettes:{
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