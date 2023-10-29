const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Products', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    keywords: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    manufacturerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Manufacturers',
        key: 'id'
      }
    },
    mediaUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    mediaType: {
      type: DataTypes.ENUM("photo","video"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Products',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
