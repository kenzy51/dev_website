// migrations/202110130008-create-support-ticket.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('SupportTickets', {
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
        subject: { type: Sequelize.STRING },
        description: { type: Sequelize.TEXT },
        status: { type: Sequelize.ENUM('open', 'closed', 'pending') },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('SupportTickets');
    }
  };
  