// migrations/202110130005-create-product-request.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('ProductRequests', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        userId: {
          type: Sequelize.UUID,
          references: { model: 'Users', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false
        },
        description: { type: Sequelize.TEXT },
        expectedPriceRange: { type: Sequelize.STRING },
        status: { type: Sequelize.ENUM('open', 'closed', 'pending') },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('ProductRequests');
    }
  };
  