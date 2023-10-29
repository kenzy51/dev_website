// order-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        id: 'c98063da-ff13-44c2-84f6-02bead04beef', // Fake UUID
        userId: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55', // Fake UUID (Replace with actual User UUID)
        status: 'pending',
        totalPrice: 0.0, // Defaulting to 0.0
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '9b7cc8af-4a4c-4e80-9bce-34f18e1dbb9f', // Fake UUID
        userId: '22f4643a-4e29-45b8-877c-9e8f8a7a96e4', // Fake UUID (Replace with actual User UUID)
        status: 'delivered',
        totalPrice: 49.99, // Example price
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Repeat for other orders
    ]); 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
