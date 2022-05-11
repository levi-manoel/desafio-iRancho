import { Sequelize } from 'sequelize';
const options = require("./database.cjs");
const sequelizeModelOptions = new Sequelize(options);

export default sequelizeModelOptions;
