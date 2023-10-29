// migrations/202110130009-create-manufacturer-location.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('ManufacturerLocations', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        manufacturerId: {
          type: Sequelize.UUID,
          references: { model: 'Manufacturers', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false
        },
        latitude: { type: Sequelize.FLOAT },
        longitude: { type: Sequelize.FLOAT },
        photoUrls: { type: Sequelize.ARRAY(Sequelize.STRING) },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('ManufacturerLocations');
    }
  };
  