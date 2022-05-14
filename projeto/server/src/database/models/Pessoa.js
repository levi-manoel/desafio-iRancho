import { DataTypes, Model } from 'sequelize';

import sequelize from '../../config/sequelizeInstance.js';
import { Animal } from './Animal.js';

export class Pessoa extends Model {};

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
  sequelize,
  modelName:'Pessoa',
  tableName:'pessoas',
  timestamps:false,
});

Pessoa.hasMany(Animal, {
  foreignKey: 'fk_id_pessoa',
  as: 'dono'
})

Animal.belongsTo(Pessoa, {
  foreignKey: 'fk_id_pessoa',
  as: 'dono'
})
