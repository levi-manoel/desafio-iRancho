import { DataTypes, Model } from 'sequelize';

import sequelize from '../../config/sequelizeInstance.js';

export class AnimalLote extends Model{};

AnimalLote.init({
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
    allowNull:false,
  }
},{
  sequelize,
  timestamps:false,
  tableName:'animais_lotes',
  modelName:'AnimalLote',
});