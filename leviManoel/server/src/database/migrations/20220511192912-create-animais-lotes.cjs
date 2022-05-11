'use strict';

module.exports = {
  up: async(queryInterface, DataTypes)=> {
    await queryInterface.createTable('animais_lotes', {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
      },
      fk_id_animal:{
        type: DataTypes.INTEGER,
        references:{
          model:{
            tableName:'animais',
          },
          key:'id',
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      fk_id_lote:{
        type: DataTypes.INTEGER,
        references:{
          model:{
            tableName:'lotes'
          },
          key:'id'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      },
      dt_entrada: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      dt_saida: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      dt_ultima_movimentacao: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      ic_bezerro:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      }
    });
  },

  down: async(queryInterface)=> {
    await queryInterface.dropTable('animais_lotes');
 }
};