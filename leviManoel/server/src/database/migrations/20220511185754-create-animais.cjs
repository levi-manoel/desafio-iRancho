'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
      await queryInterface.createTable('animais', { 
      id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_pessoa:{
        references:{
          model:'pessoas',
          key:'id',
        },
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      id_fazenda:{
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      no_animal:{
        allowNull:false,
        unique: true,
        type: DataTypes.STRING,
      },
      no_raca:{
        allowNull: false,
        type: DataTypes.STRING,
      },
      sexo:{
        allowNull: false,
        type: DataTypes.ENUM('M','F'),
      },
      vr_peso:{
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      dt_nascimento:{
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
    });
  },

  down:  async (queryInterface)=> {
       await queryInterface.dropTable('animais');
  }
};
