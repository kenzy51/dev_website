// migrations/202110130002-create-manufacturer.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Manufacturers', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        name: { type: Sequelize.STRING },
        keywords: { type: Sequelize.ARRAY(Sequelize.STRING) },
        description: { type: Sequelize.TEXT },
        location: { type: Sequelize.STRING },
        contactInfo: { type: Sequelize.STRING },
        rating: { type: Sequelize.FLOAT },
        userId: {
          type: Sequelize.UUID,
          references: { model: 'Users', key: 'id' },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
          allowNull: true
        },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Manufacturers');
    }
  };
  