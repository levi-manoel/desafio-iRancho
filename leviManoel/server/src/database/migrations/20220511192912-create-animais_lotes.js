'use strict';

module.exports = {
  up: async(queryInterface, DataTypes)=> {
    await queryInterface.createTable('animais_lotes', {
      id:{
        type: DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true,
      },
      fk_id_animal:{
        type: DataTypes.BIGINT,
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
        type: DataTypes.BIGINT,
        references:{
          model:{
            tableName:'lotes'
          },
          key:'id'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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