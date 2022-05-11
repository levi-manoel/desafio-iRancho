'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
      await queryInterface.createTable('lotes', { 
      id:{
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      no_lote: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ds_lote: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },

  down:  async (queryInterface)=> {
       await queryInterface.dropTable('lotes');
  }
};
