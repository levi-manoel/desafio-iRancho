import { Sequelize } from 'sequelize';
const options = require("./database.js");
const sequelizeModelOptions = new Sequelize(options);

export default sequelizeModelOptions;
