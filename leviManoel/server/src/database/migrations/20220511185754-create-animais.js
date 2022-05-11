'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
      await queryInterface.createTable('animais', { 
      id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.BIGINT,
      },
      fk_id_pessoa:{
        references:{
          model:'pessoas',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull:false,
        type:DataTypes.BIGINT,
      },
      id_fazenda:{
        allowNull:false,
        type: DataTypes.BIGINT,
      },
      no_animal:{
        allowNull:false,
        unique: true,
        type: DataTypes.STRING,
      },
      no_raca:{
        allowNull:false,
        type: DataTypes.STRING,
      },
      sexo:{
        allowNull:false,
        type: DataTypes.ENUM('M','F'),
      },
      vr_peso:{
        allowNull:false,
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
