const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reviews', {
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
    manufacturerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Manufacturers',
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Reviews',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Reviews_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
