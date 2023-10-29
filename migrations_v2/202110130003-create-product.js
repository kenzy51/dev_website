// migrations/202110130003-create-product.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Products', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        keywords: { type: Sequelize.ARRAY(Sequelize.STRING) },
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.TEXT },
        price: { type: Sequelize.FLOAT },
        manufacturerId: {
          type: Sequelize.UUID,
          references: { model: 'Manufacturers', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false
        },
        mediaUrls: { type: Sequelize.ARRAY(Sequelize.STRING) },
        mediaType: { type: Sequelize.ENUM('photo', 'video') },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Products');
    }
  };
  