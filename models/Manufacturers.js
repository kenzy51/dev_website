const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Manufacturers', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
        defaultValue: DataTypes.UUIDV4,  
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keywords: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contactInfo: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lng: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Manufacturers',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Manufacturers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
