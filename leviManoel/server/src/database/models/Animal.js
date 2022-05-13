import { DataTypes, Model } from 'sequelize';

import sequelize from '../../config/sequelizeInstance.js';
import { Pessoa } from './Pessoa.js';

export class Animal extends Model {};

Animal.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fk_id_pessoa: {
    type: DataTypes.INTEGER,
    references: {
      model: {
        tableName: 'pessoas',
      },
      key: 'id',
    }
  },
  id_fazenda: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  no_animal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  no_raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.ENUM('M', 'F'),
    allowNull: false,
  },
  vr_peso: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dt_nascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'animais',
  modelName: 'Animal',
});
