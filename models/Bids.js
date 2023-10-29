const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bids', {
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
    productRequestId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'ProductRequests',
        key: 'id'
      }
    },
    bidAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Bids',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Bids_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
