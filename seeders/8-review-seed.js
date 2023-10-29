// review-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        id: '1f63e951-8123-4c5b-b2eb-8cc35cb17c33', // Fake UUID
        userId: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55', // Fake UUID (Replace with actual User UUID)
        manufacturerId: 'aab7e818-990f-4b2b-869f-61dbb7f66e00', // Fake UUID (Replace with actual Manufacturer UUID)
        rating: 4, // Example rating
        comment: 'Good experience with this manufacturer.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a2d0f4a4-505d-4d8f-a0ab-49cc55d0f2ab', // Fake UUID
        userId: '22f4643a-4e29-45b8-877c-9e8f8a7a96e4', // Fake UUID (Replace with actual User UUID)
        manufacturerId: 'bf463383-4e5a-4e82-b869-7aa3a40b37e0', // Fake UUID (Replace with actual Manufacturer UUID)
        rating: 5, // Example rating
        comment: 'Excellent service and quality.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Repeat for other reviews
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
