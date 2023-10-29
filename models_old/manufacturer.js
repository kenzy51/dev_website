'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Manufacturer.hasMany(models.Product, {
        foreignKey: 'manufacturerId',
        as: 'products'
      });
    }
  }
  Manufacturer.init({
    userId: DataTypes.UUID,
    listingTitle: DataTypes.STRING,
    category: DataTypes.STRING,
    keyword: DataTypes.ARRAY(DataTypes.STRING),
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    galleryFacility: DataTypes.ARRAY(DataTypes.TEXT),
    description: DataTypes.TEXT,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    contactPerson: DataTypes.STRING,
    phone: DataTypes.STRING,
    whatsApp: DataTypes.STRING,
    telegram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Manufacturer',
  });
  return Manufacturer;
};