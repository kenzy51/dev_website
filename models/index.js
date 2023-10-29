'use strict';

import { Sequelize } from 'sequelize';
import User from './Users';
import Manufacturers from './Manufacturers';
import ManufacturerLocations from './ManufacturerLocations';
import Products from './Products';

const env = process.env.NODE_ENV || 'development';
// const configPath = path.resolve(__dirname, '..', 'config', 'config.json');
// const config = require(configPath)[env];
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  users: User(sequelize, Sequelize),
  manufacturers: Manufacturers(sequelize, Sequelize),
  manufacturerLocations: ManufacturerLocations(sequelize, Sequelize),
  products: Products(sequelize, Sequelize),
};
export const { users, manufacturers, manufacturerLocations, products } = db;
export default db;
