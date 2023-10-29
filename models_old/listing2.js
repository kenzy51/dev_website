"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Listing2 extends Model {
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: "listingId", as: "products" });
    }
  }

  Listing2.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: DataTypes.UUID,
      listingTitle: DataTypes.STRING,
      category: DataTypes.STRING,
      keyword: DataTypes.ARRAY(DataTypes.STRING),
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      gallery: DataTypes.ARRAY(DataTypes.TEXT),
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
      facilities: DataTypes.STRING,
      openingTime: DataTypes.STRING,
      closingTime: DataTypes.STRING,
      pricing: DataTypes.STRING,
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Listing2",
    }
  );

  return Listing2;
};
