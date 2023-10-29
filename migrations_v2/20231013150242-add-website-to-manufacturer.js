'use strict';
// migrations/XXXXXXXXXXXXXX-add-website-to-manufacturer.js

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Manufacturers', 'website', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Manufacturers', 'website');
  }
};


