const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductRequests', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expectedPriceRange: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("open","closed","pending"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ProductRequests',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ProductRequests_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
