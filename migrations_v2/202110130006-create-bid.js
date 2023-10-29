// migrations/202110130006-create-bid.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Bids', {
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
        productRequestId: {
          type: Sequelize.UUID,
          references: { model: 'ProductRequests', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false
        },
        bidAmount: { type: Sequelize.FLOAT },
        description: { type: Sequelize.TEXT },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Bids');
    }
  };
  