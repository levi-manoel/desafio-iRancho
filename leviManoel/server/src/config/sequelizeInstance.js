import { Sequelize } from 'sequelize';

// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url)

const options = require('./database.cjs');
const sequelizeInstance = new Sequelize(options);

export default sequelizeInstance;
