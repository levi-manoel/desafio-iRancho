import { DataTypes, Model } from 'sequelize';

import sequelize from '../../config/sequelizeInstance.js';

export class AnimalLote extends Model {
  static associate(models) {
    models.Animal.belongsToMany(models.Pessoa, {
      as: 'animais',
      through: AnimalLote,
      foreignKey: 'fk_id_animal',
      otherKey: 'fk_id_lote'
    })

    models.Lote.belongsToMany(models.Animal, {
      as: 'lotes',
      through: AnimalLote,
      foreignKey: 'fk_id_lote',
      otherKey: 'fk_id_animal'
    })
  }
};

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