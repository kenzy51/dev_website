// migrations/202110130001-create-user.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
        role: { type: Sequelize.ENUM('user', 'admin', 'manufacturer') },
        avatar: { type: Sequelize.STRING },
        phoneNumber: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        website: { type: Sequelize.STRING },
        bio: { type: Sequelize.TEXT },
        fbUrl: { type: Sequelize.STRING },
        twtUrl: { type: Sequelize.STRING },
        linkUrl: { type: Sequelize.STRING },
        insUrl: { type: Sequelize.STRING },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
    }
  };
  