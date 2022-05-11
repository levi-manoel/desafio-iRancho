import { DataTypes, Model } from 'sequelize';
import sequelizeModelOptions from '../../config/sequelizeModelOptions.js';

export class AnimalLote extends Model{};

AnimalLote.init({
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
  sequelizeModelOptions,
  timestamps:false,
  tableName:'animais_lotes',
  modelName:'AnimalLote',
});