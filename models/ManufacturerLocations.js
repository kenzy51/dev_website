const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ManufacturerLocations', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    manufacturerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Manufacturers',
        key: 'id'
      }
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    photoUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ManufacturerLocations',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ManufacturerLocations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
