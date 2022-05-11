import { DataTypes, Model } from 'sequelize';
import sequelizeModelOptions from '../../config/sequelizeModelOptions.js';

export class Pessoa extends Model {
  static associate(models){
    Pessoa.hasMany(models.Animal);
  }
};

Pessoa.init({
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  no_pessoa:{
    type:DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  no_email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
  },
  endereco:{
    type:DataTypes.STRING
  },
  sexo:{
    type:DataTypes.ENUM('M','F')
  },
  ic_ativo:{
    type:DataTypes.BOOLEAN
  },
},{
  sequelizeModelOptions,
  modelName:'Pessoa',
  tableName:'pessoas',
  timestamps:false,
});