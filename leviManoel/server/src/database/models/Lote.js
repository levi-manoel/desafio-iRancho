import { Sequelize, DataTypes, Model } from "sequelize";
const options = require("./../../config/database.js");
const sequelize = new Sequelize(options);

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
    type: DataTypes.BIGINT,
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
  sequelize,
  timestamps: false,
  tableName: 'lotes',
  modelName: 'Lote',
});
