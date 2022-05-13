import { DataTypes, Model } from 'sequelize';

import sequelize from '../../config/sequelizeInstance.js';

import { Animal } from './Animal.js';
import { Lote } from './Lote.js';

export class AnimalLote extends Model {};

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

Animal.belongsToMany(Lote, {
  as: 'animais',
  through: AnimalLote,
  foreignKey: 'fk_id_animal',
  otherKey: 'fk_id_lote'
});

Lote.belongsToMany(Animal, {
  as: 'lotes',
  through: AnimalLote,
  foreignKey: 'fk_id_lote',
  otherKey: 'fk_id_animal'
})
