import { Sequelize } from 'sequelize';
import require from '../utils/require.js';

const options = require('./database.cjs');
const sequelizeInstance = new Sequelize(options);

export default sequelizeInstance;
