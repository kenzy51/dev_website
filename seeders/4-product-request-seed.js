// product-request-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductRequests', [
      {
        id: '1c4dab71-5482-4c5a-8a1c-b13107608dcd', // Fake UUID
        userId: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55', // Fake UUID (Replace with actual User UUID)
        description: 'Description for ProductRequest 1',
        expectedPriceRange: '100-200', // Example price range
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e0db5c7f-59e7-43f2-a968-03f2f1ebfd8b', // Fake UUID
        userId: '22f4643a-4e29-45b8-877c-9e8f8a7a96e4', // Fake UUID (Replace with actual User UUID)
        description: 'Description for ProductRequest 2',
        expectedPriceRange: '50-100', // Example price range
        status: 'closed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Repeat for other product requests
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductRequests', null, {});
  }
};
