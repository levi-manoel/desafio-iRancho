import { DataTypes, Model } from 'sequelize';
import sequelizeModelOptions from '../../config/sequelizeModelOptions.js';

export class Animal extends Model {
  static associate(models){
    Animal.belongsTo(models.Pessoa, {
      foreignKey: 'fk_id_pessoa',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    Animal.belongsToMany(models.Lote, {
      through: 'animais_lotes',
      foreignKey: 'fk_id_animal'
    });
  }
};

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
  sequelizeModelOptions,
  timestamps: false,
  tableName: 'animais',
  modelName: 'Animal',
});
