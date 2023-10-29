// migrations/202110130004-create-order.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Orders', {
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
        status: { type: Sequelize.ENUM('pending', 'processed', 'shipped', 'delivered', 'cancelled') },
        totalPrice: { type: Sequelize.FLOAT },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Orders');
    }
  };
  