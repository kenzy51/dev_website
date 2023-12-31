'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

import User from './Users';
import Manufacturers from './Manufacturers'
import ManufacturerLocations from './ManufacturerLocations';
import Products from './Products';
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


db.users = User(sequelize, Sequelize);
db.manufacturers= Manufacturers(sequelize, Sequelize);
db.manufacturerLocations = ManufacturerLocations(sequelize, Sequelize)
db.products = Products(sequelize, Sequelize)




db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
