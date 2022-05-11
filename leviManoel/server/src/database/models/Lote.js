import { DataTypes, Model } from 'sequelize';
import sequelizeModelOptions from '../../config/sequelizeModelOptions.js';

export class Lote extends Model {
  static associate(models){
    Lote.belongsToMany(models.Lote, {
      through: 'animais_lotes',
      foreignKey: 'fk_id_lote',
    });
  }
};

Lote.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  no_lote: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ds_lote: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelizeModelOptions,
  timestamps: false,
  tableName: 'lotes',
  modelName: 'Lote',
});
